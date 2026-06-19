import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const sendMagicLink = async (req, res) => {

  try {

    const { email } = req.body;

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const magicLink =
      `http://localhost:5173/verify/${token}`;

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Secure Passwordless Login",
      html: `
        <h2>Passwordless Login</h2>
        <p>Click the button below to login:</p>
        <a href="${magicLink}">
          Login Now
        </a>
      `
    });

    res.json({
      message: "Magic Link Sent Successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

};

export const verifyMagicLink = async (req, res) => {

  try {

    const { token } = req.body;

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    res.json({
      success: true,
      email: decoded.email
    });

  } catch (error) {

    res.status(401).json({
      success: false,
      message: "Invalid or Expired Link"
    });

  }

};
import Otp from "../models/Otp.js";
import nodemailer from "nodemailer";

export const sendOtp = async (req, res) => {

  try {

    const { email } = req.body;

    const otp =
      Math.floor(
        100000 +
        Math.random() * 900000
      ).toString();

    await Otp.deleteMany({
      email
    });

    await Otp.create({

      email,

      otp,

      expiresAt:
        new Date(
          Date.now() +
          5 * 60 * 1000
        )

    });

    const transporter =
  nodemailer.createTransport({

    service: "gmail",

    auth: {

      user:
        process.env.EMAIL,

      pass:
        process.env.EMAIL_PASSWORD

    },

    tls: {
      rejectUnauthorized: false
    }

  });

      

    await transporter.sendMail({

      from:
        process.env.EMAIL,

      to: email,

      subject:
        "Your OTP Code",

      html:
        `
        <h2>Your OTP Code</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 5 minutes.</p>
        `

    });

    console.log(
      "OTP Sent Successfully:",
      email
    );

    res.json({
      success: true,
      message:
        "OTP Sent Successfully"
    });

  } catch (error) {

    console.error(
      "OTP ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      error:
        error.message
    });

  }

};

export const verifyOtp = async (req, res) => {

  try {

    const {
      email,
      otp
    } = req.body;

    const otpRecord =
      await Otp.findOne({
        email,
        otp
      });

    if (!otpRecord) {

      return res.status(400).json({
        success: false,
        message:
          "Invalid OTP"
      });

    }

    if (
      otpRecord.expiresAt <
      new Date()
    ) {

      return res.status(400).json({
        success: false,
        message:
          "OTP Expired"
      });

    }

    await Otp.deleteMany({
      email
    });

    res.json({
      success: true,
      message:
        "OTP Verified Successfully"
    });

  } catch (error) {

    console.error(
      "VERIFY OTP ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      error:
        error.message
    });

  }

};
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OtpVerificationPage() {

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(300);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const email =
    localStorage.getItem("userEmail");

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) =>
        prev > 0
          ? prev - 1
          : 0
      );

    }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  const handleVerify = async () => {

    try {

      setLoading(true);

      const response =
        await axios.post(
          "http://localhost:5000/api/otp/verify",
          {
            email,
            otp
          }
        );

      if (response.data.success) {

        alert(
          "OTP Verified Successfully"
        );

        navigate(
          "/dashboard"
        );

      }

    } catch (error) {

      alert(
        "Invalid or Expired OTP"
      );

    } finally {

      setLoading(false);

    }

  };

  const handleResend = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/otp/send",
        {
          email
        }
      );

      alert(
        "OTP Sent Successfully"
      );

      setTimeLeft(300);

    } catch (error) {

      alert(
        "Failed To Send OTP"
      );

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#071330,#0f172a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >

      <div
        style={{
          width: "500px",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 0 40px rgba(0,194,255,0.25)"
        }}
      >

        <div
          style={{
            textAlign: "center",
            fontSize: "60px"
          }}
        >
          🔐
        </div>

        <h1
          style={{
            textAlign: "center",
            marginTop: "10px"
          }}
        >
          OTP Verification
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8"
          }}
        >
          Enter the OTP sent to
        </p>

        <h3
          style={{
            textAlign: "center",
            color: "#00c2ff"
          }}
        >
          {email}
        </h3>

        <input
          type="text"
          maxLength="6"
          placeholder="Enter 6-Digit OTP"
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "18px",
            boxSizing: "border-box"
          }}
        />

        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: "#00c2ff",
            fontWeight: "bold"
          }}
        >
          ⏱ {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60)
            .toString()
            .padStart(2, "0")}
        </p>

        <button
          onClick={handleVerify}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "15px",
            background: "#00c2ff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          {loading
            ? "Verifying..."
            : "Verify OTP"}
        </button>

        <button
          onClick={handleResend}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "10px",
            background: "transparent",
            color: "#00c2ff",
            border: "1px solid #00c2ff",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Resend OTP
        </button>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "14px"
          }}
        >
          🛡 Never share your OTP with anyone.
        </div>

      </div>

    </div>

  );

}

export default OtpVerificationPage;
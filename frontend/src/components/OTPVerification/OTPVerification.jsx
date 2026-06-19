import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OtpVerificationPage() {

  const [otp, setOtp] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [timeLeft, setTimeLeft] =
    useState(300);

  const navigate =
    useNavigate();

  const email =
    localStorage.getItem(
      "userEmail"
    );

  useEffect(() => {

    const timer =
      setInterval(() => {

        setTimeLeft((prev) =>
          prev > 0
            ? prev - 1
            : 0
        );

      }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  const handleVerify =
    async () => {

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

        if (
          response.data.success
        ) {

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

  const handleResend =
    async () => {

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
          width: "450px",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 0 30px rgba(0,194,255,0.2)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "10px"
          }}
        >
          🔐
        </h1>

        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          OTP Verification
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1"
          }}
        >
          Secure Login Verification
        </p>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center"
          }}
        >

          <p>
            OTP Sent To
          </p>

          <h3
            style={{
              color: "#00c2ff"
            }}
          >
            {email}
          </h3>

        </div>

        <input
          type="text"
          maxLength="6"
          placeholder="Enter 6 Digit OTP"
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "30px",
            borderRadius: "10px",
            border: "none",
            fontSize: "18px",
            outline: "none"
          }}
        />

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#00c2ff"
          }}
        >
          ⏱ {Math.floor(timeLeft / 60)}
          :
          {(timeLeft % 60)
            .toString()
            .padStart(2, "0")}
        </p>

        <button
          onClick={handleVerify}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "15px",
            background: "#00c2ff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600"
          }}
        >
          {
            loading
              ? "Verifying..."
              : "Verify OTP"
          }
        </button>

        <button
          onClick={handleResend}
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "15px",
            background: "transparent",
            border:
              "1px solid #00c2ff",
            color: "#00c2ff",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Resend OTP
        </button>

      </div>

    </div>

  );

}

export default OtpVerificationPage;
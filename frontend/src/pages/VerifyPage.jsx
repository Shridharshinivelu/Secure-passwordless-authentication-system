import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyPage() {

  const { token } = useParams();

  const navigate = useNavigate();

  useEffect(() => {

    const verifyLogin = async () => {

      try {

        console.log("Verification Started");

        localStorage.setItem(
          "authToken",
          token
        );

        const verifyResponse =
          await axios.post(
            "http://localhost:5000/api/magic-link/verify",
            {
              token
            }
          );

        const email =
          verifyResponse.data.email;

        console.log(
          "EMAIL FROM TOKEN:",
          email
        );

        localStorage.setItem(
          "userEmail",
          email
        );

        const userAgent =
          navigator.userAgent;

        let deviceName =
          "Unknown Device";

        if (
          userAgent.includes("Windows")
        ) {

          deviceName =
            "Windows Laptop";

        }
        else if (
          userAgent.includes("Android")
        ) {

          deviceName =
            "Android Phone";

        }
        else if (
          userAgent.includes("iPhone")
        ) {

          deviceName =
            "iPhone";

        }
        else if (
          userAgent.includes("Mac")
        ) {

          deviceName =
            "MacBook";

        }

        console.log(
          "Saving Device..."
        );

        await axios.post(
          "http://localhost:5000/api/devices/save",
          {
            email,
            deviceName,
            browser:
              navigator.userAgent
          }
        );

        console.log(
          "Device Saved Successfully"
        );

        console.log(
          "Saving Security Log..."
        );

        await axios.post(
          "http://localhost:5000/api/logs/save",
          {
            email,
            action:
              "Magic Link Login Success",
            ipAddress:
              "127.0.0.1"
          }
        );

        console.log(
          "Log Saved Successfully"
        );

        console.log(
          "Sending OTP..."
        );

        await axios.post(
          "http://localhost:5000/api/otp/send",
          {
            email
          }
        );

        console.log(
          "OTP Sent Successfully"
        );

        navigate("/otp");

      } catch (error) {

        console.error(
          "VERIFY ERROR:",
          error
        );

        console.log(
          error.response?.data
        );

        alert(
          JSON.stringify(
            error.response?.data
          ) || error.message
        );

      }

    };

    verifyLogin();

  }, [token, navigate]);

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#071330",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >

      <h1>
        ✅ Magic Link Verified
      </h1>

      <p>
        Authentication Successful
      </p>

      <p>
        Saving Device Information...
      </p>

      <p>
        Creating Security Log...
      </p>

      <p>
        Sending OTP...
      </p>

      <p>
        Redirecting to OTP Verification...
      </p>

    </div>

  );

}

export default VerifyPage;
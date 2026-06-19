import { useState } from "react";
import "../assets/css/login.css";

function LoginPage() {

  const [email, setEmail] = useState("");

  const handleMagicLink = async () => {

    try {

      // Save email for dashboard
      localStorage.setItem(
        "userEmail",
        email
      );

      const response =
        await fetch(
          "http://localhost:5000/api/magic-link/send",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              email
            })
          }
        );

      const data =
        await response.json();

      alert(
        data.message
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed to send magic link"
      );

    }

  };

  return (

    <div className="login-page">

      <div className="overlay"></div>

      <div className="content">

        <div className="left-panel">

          <h4>
            SECURE PASSWORDLESS AUTHENTICATION
          </h4>

          <h1>
            Secure Identity &
            <br />
            Passwordless
            <br />
            Access Management
          </h1>

          <div className="feature-list">

            <div>
              ✓ Magic Link Login
            </div>

            <div>
              ✓ OTP Authentication
            </div>

            <div>
              ✓ Passkey Authentication
            </div>

            <div>
              ✓ Device Trust Management
            </div>

            <div>
              ✓ Security Activity Logs
            </div>

          </div>

        </div>

        <div className="right-panel">

          <div className="login-card">

            <h2>
              Welcome Back
            </h2>

            <p>
              Enter your email address
            </p>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <button
              onClick={handleMagicLink}
            >
              Send Magic Link
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default LoginPage;
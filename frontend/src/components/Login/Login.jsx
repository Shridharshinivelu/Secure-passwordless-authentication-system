import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");

  const sendMagicLink = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/magic-link/send",
        {
          email
        }
      );

      alert(response.data.message);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to send magic link"
      );
    }
  };

  return (

    <div className="login-page">

      <div className="hero-content">

        <div className="hero-badge">
          PASSWORDLESS SECURITY PLATFORM
        </div>

        <h1>
          Intelligent
          <br />
          Passwordless
          <br />
          Authentication
        </h1>

        <h3 className="hero-subtitle">
          Secure. Fast. Password-Free.
        </h3>

      </div>

      <div className="login-card">

        <h2 style={{ color: "yellow", fontSize: "40px" }}>
  THIS IS LOGIN COMPONENT
</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
  className="magic-btn"
  onClick={() => alert("Button Clicked")}
>
  🔐 Send Secure Magic Link
</button>

      </div>

    </div>

  );
}

export default Login;
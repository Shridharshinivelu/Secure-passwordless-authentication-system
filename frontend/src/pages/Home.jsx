import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

function Home() {

  const [email, setEmail] = useState("");

  const sendMagicLink = async () => {

    if (!email) {
      alert("Please enter your email");
      return;
    }

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
    <>
      <Navbar />

      <div
        style={{
          marginLeft: "280px",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#071330",
          color: "white",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#1976ff",
              padding: "10px 25px",
              borderRadius: "6px",
              marginBottom: "25px",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            PASSWORDLESS SECURITY PLATFORM
          </div>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "700",
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            Intelligent
            <br />
            Passwordless
            <br />
            Authentication
          </h1>

          <h3
            style={{
              color: "#dbeafe",
              fontWeight: "400",
              marginBottom: "40px",
            }}
          >
            Secure. Fast. Password-Free.
          </h3>

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "400px",
              padding: "15px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              marginBottom: "30px",
              fontSize: "16px",
            }}
          />

          <br />

          <button
            onClick={sendMagicLink}
            style={{
              padding: "18px 40px",
              border: "none",
              borderRadius: "50px",
              background:
                "linear-gradient(135deg,#00c2ff,#1976ff)",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow:
                "0 10px 25px rgba(0,194,255,.4)",
            }}
          >
            🔐 Login with Magic Link
          </button>

        </div>
      </div>
    </>
  );
}

export default Home;
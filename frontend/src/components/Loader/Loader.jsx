import { useState } from "react";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");

  return (
    <div className="login-wrapper">

      <div className="login-card">

        <h2>Passwordless Login</h2>

        <p>
          Login securely using Magic Links
        </p>

        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button>
          Send Magic Link
        </button>

      </div>

    </div>
  );
}

export default Login;
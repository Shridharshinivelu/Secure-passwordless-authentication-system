import Navbar from "../components/Navbar/Navbar";

function SettingsPage() {

  return (

    <>
      <Navbar />

      <div
        style={{
          marginLeft: "280px",
          padding: "30px",
          minHeight: "100vh",
          background: "#071330",
          color: "white"
        }}
      >

        <h1>Security Settings</h1>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          <div className="card">
            <h3>✓ Magic Link Authentication</h3>
            <p>
              Login using secure email magic links.
            </p>
            <span style={{ color: "#22c55e" }}>
              Active
            </span>
          </div>

          <div className="card">
            <h3>✓ Device Trust Management</h3>
            <p>
              Track and manage trusted devices.
            </p>
            <span style={{ color: "#22c55e" }}>
              Active
            </span>
          </div>

          <div className="card">
            <h3>✓ Login Notifications</h3>
            <p>
              Record successful login activities.
            </p>
            <span style={{ color: "#22c55e" }}>
              Active
            </span>
          </div>
          <div className="card">
            <h3>✓ OTP Verification</h3>
            <p>
              Verify login using OTP.
            </p>
            <span style={{ color: "#22c55e" }}>
              Active
            </span>
          </div>
        

          <div className="card">
            <h3>🚧 Passkey Authentication</h3>
            <p>
              Fingerprint and Windows Hello login.
            </p>
            <span style={{ color: "#f59e0b" }}>
              Coming Soon
            </span>
          </div>

        </div>

      </div>

    </>
  );
}

export default SettingsPage;
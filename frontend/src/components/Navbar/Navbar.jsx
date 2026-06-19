import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const handleLogout = () => {

    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");

    window.location.href = "/";
  };

  return (

    <div className="sidebar">

      <div className="logo">
        🔐 SecureAuth
      </div>

      <div className="nav-menu">

        <Link
          to="/dashboard"
          className="nav-link"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/devices"
          className="nav-link"
        >
          📱 Devices
        </Link>

        <Link
          to="/logs"
          className="nav-link"
        >
          📜 Security Logs
        </Link>

        

        <Link
          to="/settings"
          className="nav-link"
        >
          ⚙️ Settings
        </Link>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

  );
}

export default Navbar;
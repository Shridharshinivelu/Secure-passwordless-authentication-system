import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState({
    deviceCount: 0,
    loginCount: 0,
    lastLogin: null
  });

  const email =
    localStorage.getItem("userEmail")
    || "demo@gmail.com";

  const fetchDashboardStats =
    async () => {

      try {

        const response =
          await axios.get(
            `http://localhost:5000/api/dashboard/stats?email=${email}`
          );

        setStats(
          response.data
        );

      } catch (error) {

        console.error(
          "Dashboard Error:",
          error
        );

      }

    };

  useEffect(() => {

    fetchDashboardStats();

    const interval =
      setInterval(
        fetchDashboardStats,
        5000
      );

    return () => {

      clearInterval(
        interval
      );

    };

  }, [email]);

  const securityScore =

    Math.min(
      60 +
      stats.deviceCount * 5 +
      stats.loginCount * 2,
      100
    );

  return (

    <div className="dashboard">

      <h1>
        Security Dashboard
      </h1>

      <h3
        style={{
          color: "#00c2ff",
          marginBottom: "30px"
        }}
      >
        Welcome, {email}
      </h3>

      <div className="stats">

        <div className="card">

          <h3>
            Security Score
          </h3>

          <h1>
            {securityScore}%
          </h1>

        </div>

        <div className="card">

          <h3>
            Trusted Devices
          </h3>

          <h1>
            {stats.deviceCount}
          </h1>

        </div>

        <div className="card">

          <h3>
            Passkeys
          </h3>

          <h1>
            1
          </h1>

        </div>

        <div className="card">

          <h3>
            Magic Link Logins
          </h3>

          <h1>
            {stats.loginCount}
          </h1>

        </div>

      </div>

      <div
        className="card"
        style={{
          marginTop: "30px"
        }}
      >

        <h3>
          Last Login
        </h3>

        <h2>

          {
            stats.lastLogin
              ? new Date(
                  stats.lastLogin
                ).toLocaleString()
              : "No Login Records"
          }

        </h2>

      </div>

    </div>

  );

}

export default Dashboard;
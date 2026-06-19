import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

function DevicePage() {

  const [devices, setDevices] =
    useState([]);

  const fetchDevices = async () => {

    try {

      const email =
        localStorage.getItem(
          "userEmail"
        );

      const response =
        await axios.get(
          "http://localhost:5000/api/devices/all"
        );

      const userDevices =
        response.data.filter(
          (device) =>
            device.email === email
        );

      setDevices(
        userDevices
      );

    } catch (error) {

      console.error(
        "Device Fetch Error:",
        error
      );

    }

  };

  useEffect(() => {

    fetchDevices();

    const interval =
      setInterval(
        fetchDevices,
        5000
      );

    return () => {

      clearInterval(
        interval
      );

    };

  }, []);

  return (

    <>
      <Navbar />

      <div
        style={{
          marginLeft: "280px",
          padding: "40px",
          minHeight: "100vh",
          background: "#071330",
          color: "white"
        }}
      >

        <h1>
          📱 Trusted Devices
        </h1>

        <p>
          Manage devices that have access to your account.
        </p>

        {
          devices.length === 0
          ? (
            <h3
              style={{
                marginTop: "30px"
              }}
            >
              No Trusted Devices Found
            </h3>
          )
          : (
            devices.map(
              (device) => (

                <div
                  key={device._id}
                  style={{
                    background: "#0f172a",
                    padding: "20px",
                    borderRadius: "15px",
                    marginTop: "20px",
                    border: "1px solid #1e293b"
                  }}
                >

                  <h2>
                    {device.deviceName}
                  </h2>

                  <p>
                    Browser:
                    {" "}
                    {device.browser}
                  </p>

                  <p>
                    Last Login:
                    {" "}
                    {
                      new Date(
                        device.lastLogin
                      ).toLocaleString()
                    }
                  </p>

                  <p>
                    Status:
                    <span
                      style={{
                        color: "#22c55e",
                        marginLeft: "8px"
                      }}
                    >
                      Trusted
                    </span>
                  </p>

                  <button
                    style={{
                      marginTop: "15px",
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      cursor: "pointer"
                    }}
                  >
                    Remove Device
                  </button>

                </div>

              )
            )
          )
        }

      </div>

    </>
  );

}

export default DevicePage;
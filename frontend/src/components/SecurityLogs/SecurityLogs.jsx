import { useEffect, useState } from "react";
import axios from "axios";
import "./SecurityLogs.css";

function SecurityLogs() {

  const [logs, setLogs] = useState([]);

  useEffect(() => {

    fetchLogs();

  }, []);

  const fetchLogs = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/logs/all"
        );

      setLogs(
        response.data
      );

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="logs">

      <h1>
        Security Activity Logs
      </h1>

      <table>

        <thead>

          <tr>

            <th>Action</th>

            <th>IP Address</th>

            <th>Time</th>

          </tr>

        </thead>

        <tbody>

          {
            logs.map((log) => (

              <tr
                key={log._id}
              >

                <td>
                  {log.action}
                </td>

                <td>
                  {log.ipAddress}
                </td>

                <td>
                  {
                    new Date(
                      log.createdAt
                    ).toLocaleString()
                  }
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );
}

export default SecurityLogs;
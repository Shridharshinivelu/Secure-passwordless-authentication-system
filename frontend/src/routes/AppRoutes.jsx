import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

import Home from "../pages/Home";
import VerifyPage from "../pages/VerifyPage";
import OtpVerificationPage
from "../pages/OtpVerificationPage";
import DashboardPage from "../pages/DashboardPage";
import DevicePage from "../pages/DevicePage";
import LogsPage from "../pages/LogsPage";
import SettingsPage from "../pages/SettingsPage";
import RegisterPage from "../pages/RegisterPage";


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/verify/:token"
          element={<VerifyPage />}
        />
        <Route
  path="/otp"
  element={<OtpVerificationPage />}
 />
        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/devices"
          element={
            <ProtectedRoute>
              <DevicePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/logs"
          element={
            <ProtectedRoute>
              <LogsPage />
            </ProtectedRoute>
          }
        />

        

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;
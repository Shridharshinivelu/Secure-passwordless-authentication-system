import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import otpRoutes from "./routes/otpRoutes.js";
import deviceRoutes from "./routes/deviceRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import magicLinkRoutes from "./routes/magicLinkRoutes.js";
import webauthnRoutes from "./routes/webauthnRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.get("/", (req, res) => {

  res.send(
    "Secure Passwordless Authentication Backend Running"
  );

});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/otp",
  otpRoutes
);

app.use(
  "/api/devices",
  deviceRoutes
);

app.use(
  "/api/logs",
  logRoutes
);

app.use(
  "/api/magic-link",
  magicLinkRoutes
);

app.use(
  "/api/webauthn",
  webauthnRoutes
);
app.use(
  "/api/dashboard",
  dashboardRoutes
);
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});

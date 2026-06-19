import express from "express";

import {
  registerPasskey
}
from "../controllers/webauthnController.js";

const router =
express.Router();

router.get(
  "/register",
  registerPasskey
);

export default router;
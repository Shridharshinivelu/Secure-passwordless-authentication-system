import express from "express";

import {
  saveDevice,
  getDevices
}
from "../controllers/deviceController.js";

const router =
express.Router();

router.post(
  "/save",
  saveDevice
);

router.get(
  "/all",
  getDevices
);

export default router;
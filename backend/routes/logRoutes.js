import express from "express";

import {
  getLogs,
  saveLog
}
from "../controllers/logController.js";

const router =
express.Router();

router.post(
  "/save",
  saveLog
);

router.get(
  "/all",
  getLogs
);

export default router;
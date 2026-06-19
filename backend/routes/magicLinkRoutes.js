import express from "express";

import {
  sendMagicLink,
  verifyMagicLink
}
from "../controllers/magicLinkController.js";

const router = express.Router();

router.post(
  "/send",
  sendMagicLink
);

router.post(
  "/verify",
  verifyMagicLink
);

export default router;
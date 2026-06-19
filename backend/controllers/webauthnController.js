import {
  createChallenge
}
from "../services/webauthnService.js";

export const registerPasskey =
(req,res)=>{

  const challenge =
    createChallenge();

  res.json({
    challenge
  });
};
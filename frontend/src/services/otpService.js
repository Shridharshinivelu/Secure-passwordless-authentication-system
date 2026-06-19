import api from "./api";

export const sendOTP = async (email) => {
  return api.post("/otp/send", { email });
};

export const verifyOTP = async (email, otp) => {
  return api.post("/otp/verify", {
    email,
    otp
  });
};
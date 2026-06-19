import api from "./api";

export const sendMagicLink = async (email) => {
  return api.post("/magic-link/send", {
    email
  });
};
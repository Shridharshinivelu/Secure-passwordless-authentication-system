import api from "./api";

export const registerPasskey = async () => {
  return api.get("/webauthn/register");
};

export const loginPasskey = async () => {
  return api.get("/webauthn/login");
};
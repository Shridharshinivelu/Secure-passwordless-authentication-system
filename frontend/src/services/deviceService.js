import api from "./api";

export const getDevices = async () => {
  return api.get("/devices");
};
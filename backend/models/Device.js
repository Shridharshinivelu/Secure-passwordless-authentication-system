import mongoose from "mongoose";

const deviceSchema =
new mongoose.Schema(
{
  email: String,

  deviceName: String,

  browser: String,

  lastLogin: Date
},
{
  timestamps: true
});

export default mongoose.model(
  "Device",
  deviceSchema
);
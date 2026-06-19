import mongoose from "mongoose";

const logSchema =
new mongoose.Schema(
{
  email: String,

  action: String,

  ipAddress: String
},
{
  timestamps: true
});

export default mongoose.model(
  "Log",
  logSchema
);
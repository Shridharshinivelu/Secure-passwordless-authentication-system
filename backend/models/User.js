import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  otp: String,

  passkeyId: String,

  passwordlessEnabled: {
    type: Boolean,
    default: true
  }
},
{
  timestamps: true
});

export default mongoose.model(
  "User",
  userSchema
);
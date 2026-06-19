import mongoose from "mongoose";

const sessionSchema =
new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  token: String,

  expiresAt: Date
},
{
  timestamps: true
});

export default mongoose.model(
  "Session",
  sessionSchema
);
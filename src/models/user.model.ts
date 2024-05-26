import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a Username."],
  },
  emailId: {
    type: String,
    required: [true, "Please provide an Email ID."],
    unique: true,
  },
  phoneNumber: {
    type: String,
    sparse: true,
    unique: true,
  },
  credentials: {
    type: Object,
    default: {},
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: Date,
});
const User = mongoose.models.users || mongoose.model("users", userSchema);

export { User };

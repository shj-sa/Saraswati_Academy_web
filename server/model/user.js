const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["Student", "Teacher", "Admin", "Owner"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", UserSchema);

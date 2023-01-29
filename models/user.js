const mongoose = require("mongoose");

// const { objectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   index: true,
    // },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    // cart: {
    //   type: Array,
    //   default: [],
    // },
    // address: String,
    // wishlist: [
    //   {
    //     type: objectId,
    //     ref: "Product",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

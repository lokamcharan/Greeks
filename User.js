
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userID: Number,
    name: String,
    email: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;

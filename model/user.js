const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLenght: [3, "Name should consist of minimum 3 words!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        validation: [/.+\@.+\..+/, "Enter a valid email!"]
    }
});

const user = mongoose.model("user", userSchema);
module.exports = user;
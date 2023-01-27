const mongoose = require("mongoose");

mongoose.set('strictQuery',true);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    id: String,
    require: [true, "Name is Required"],
    trim: true,
    maxlength: [250, "Name must be 25 Ch Long"],
  },
  
});

module.exports = mongoose.model("User", userSchema);

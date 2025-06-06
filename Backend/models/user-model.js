const mongoose = require("mongoose");
const bcrypt = require("bcrypt");  //bcrypt is a library used to securely hash passwords before saving them to the database.
const jwt = require("jsonwebtoken"); //It's a secure way to send and verify data (like user login info) between client and server.

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "first name must be at least 3 characters long"],
    },

    lastname: {
      type: String,
      minlength: [3, "last name must be at least 3 characters long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be ar least 5 characters long"],
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn:'24h'});//generate the jwt token for specific user for login or for authentications,..this._id refers to the current mongodb id
  return token;
};
//compare password before saving into database 
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//// Hash password before saving
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

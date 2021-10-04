const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    secondName: {
      type: String,
      required: false,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Please enter a phone number'],
      trim: true,
      unique:[true,'This phone number is exist already!']
    },
    verificationNumber: {
      type: Number,
      required: [true, 'Please enter  verification number'],
      trim: true,
      unique:false,
    }
  },
  { timestamps: true }
);


const User = mongoose.model('User', userSchema)
module.exports = User


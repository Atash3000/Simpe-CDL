const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')
const { sendSMS } = require('../utils/send_sms')

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({})

  res.status(200).json({
    status: 'Succsess',
    length: users.length,
    data: {
      users,
    },
  })
})

exports.createUser = catchAsync(async (req, res, next) => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000)
  const userPhoneNum = req.body.phoneNumber
   if (userPhoneNum) {
    await sendSMS(userPhoneNum, randomNumber)
  }

  const user = await User.findOne({ phoneNumber: userPhoneNum })
  let newUser = {}
  const filter = { phoneNumber: userPhoneNum }
  const update = { verificationNumber: randomNumber }
  if (user) {
    newUser = await User.findOneAndUpdate(filter, update, {
      new: true,
    })
  } else {
    newUser = await User.create({
      phoneNumber: userPhoneNum,
      verificationNumber: randomNumber,
    })
  }
  const {phoneNumber,verificationNumber} = newUser

  res.status(201).json({
    status: 'Succsess',
    data: {
      phoneNumber,
      verificationNumber,
    },
  })
})

exports.getUserByPhoneNumber = catchAsync(async (req, res, next) => {
  const userNumber = req.params.phoneNumber
  const user = await User.findOne({ phoneNumber: userNumber }).select([
    'phoneNumber',
    'verificationNumber',
    '-_id',
  ])

  res.status(200).json({
    status: 'Succsess',
    data: {
      user,
    },
  })
})

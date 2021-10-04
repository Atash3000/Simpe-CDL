// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console

const catchAsync = require('./catchAsync')

// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)


exports.sendSMS = catchAsync(async(userNumber,randomNumber) => {
 await client.messages
   .create({
     body: `Your Simple CDL verification code is : ${randomNumber}`,
     from: '+12054488337',
     to: userNumber,
   })
   //.then((message) => console.log(message.sid))

})




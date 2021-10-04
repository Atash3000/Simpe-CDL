const express = require('express')
const { getAllUsers,createUser, getUserByPhoneNumber } = require('../controllers/userController')


const router = express.Router()
router.route('/').get(getAllUsers)
router.route('/').post(createUser)

router.route('/:phoneNumber').get(getUserByPhoneNumber)
module.exports = router

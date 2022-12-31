const express = require('express')
const cnt = require('../controllers/paymentController')
// const userCnt = require('../controllers/userController')
const router = express.Router()

 router.post("/checkout", cnt.checkout)
 router.get('/chatlist/:userId',cnt.checkout)

 router.post("/paymentVerification", cnt.paymentVerification);

module.exports = router;
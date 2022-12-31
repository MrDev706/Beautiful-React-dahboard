// const instance  = require("../server.js");
const crypto = require("crypto");
const  Payment = require("../models/paymentModel.js");

const Razorpay = require("razorpay");


var instance = new Razorpay({
  
  key_id : "rzp_test_68hOhyCY6693ZV",
  //key_id: 'rzp_test_FmTtwKwzpleRd',
  //key_secret: 'lpKqYHYBaPfQCeLkJydFjTVN',
  key_secret : "AiVaAl98aexOjvKHns6osCKb"
});



const checkout = async(req, res) => {

  //console.log(instance)
 
  const options = {
    amount: 100,
    currency: "INR",
  };
  console.log("kjhgfd")
  const order = await instance.orders.create(options);




  // const order = await instance.orders.create(options, (err, result)=>{
  //   // console.log(err)
  //    console.log(result)

  // });
  console.log(order)
  return res.status(200).json({
    success: true,
    order
  });




};


const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body
  const body = razorpay_order_id + "|" + razorpay_payment_id
  const expectedSignature = crypto
    .createHmac("sha256", "AiVaAl98aexOjvKHns6osCKb")
    .update(body.toString())
    .digest("hex");

  let isAuthentic = expectedSignature == razorpay_signature

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    }).catch(err=>console.log(err));
    res.redirect(
      `http://localhost:3000/paymentsuccess`
    );
  }
  else {
    res.status(400).json({
      success: false,
    });
  }


}


module.exports.paymentVerification = paymentVerification


module.exports.checkout = checkout
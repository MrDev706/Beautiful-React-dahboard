const {app} = require('./app')
const Razorpay = require("razorpay");
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

// const instance = new Razorpay({
//   key_id: 'rzp_test_FmTtwKwzpleRd',
//   key_secret: 'lpKqYHYBaPfQCeLkJydFjTVN',
// });

mongoose.connect("mongodb+srv://ddutta706:Kp9AhM76EvHSQyYk@cluster0.levfaad.mongodb.net/rozorpay-v0", {
    useNewUrlParser: true,
}).then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.listen(4000, () =>
  console.log(`Server is working on 4000`)
);

//module.exports.instance = instance
import React from 'react'
import axios from 'axios'
import './home.css'

const Home = () => {
    const checkoutHandler = async(amount)=>{
        
        // const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        // const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        //     amount
        // })

        const { data: { key } } = await axios.get("http://www.localhost:3000/user/getapi-key")

        const { data: { order } } = await axios.post("http://localhost:3000/vendor/create-plan", {
           pay: 1000,
           plan : "xxxx"
        })
        console.log(key)
        console.log(order)


        const options = {
            //key: "rzp_test_FmTtwKwzpleRd",
            key,
            amount: order.amount,
            currency: "INR",
            name: "6 Pack Programmer",
            description: "Tutorial of RazorPay",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            //callback_url:  "http://localhost:3000/user/verify-payment", //"http://localhost:4000/api/paymentverification",
            
            handler : async function(response){
                let data = {response,email: "poradi500@gmail.com", vendorId: "64231f19d4f3fbd7d432a870", plan: "standard", name: "Debashish Dutta"}
                 axios.post("http://localhost:3000/vendor/verify-payment", data).then((res) => console.log(res))

            },
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();

    }



  return (
    <div className="container">
        <div className="card">
            <div className='prod-img'>
                <img src="https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png" />
                
            </div>
            <h2>hey this prof</h2>
            <div className='prod-details'>
                <button onClick={()=>checkoutHandler(100)}>Pay Now</button>
            </div>
        </div>

        <div className="card">
            <div className='prod-img'>
                <img src="https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png" />
                
            </div>
            <h2>hey this prof</h2>
            <div className='prod-details'>
                <button onClick={()=>checkoutHandler()}>Pay Now</button>
            </div>
        </div>

        <div className="card">
            <div className='prod-img'>
                <img src="https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png" />
                
            </div>
            <h2>hey this prof</h2>
            <div className='prod-details'>
                <button onClick={()=>checkoutHandler()}>Pay Now</button>
            </div>
        </div>
        
    </div>
  )
}


export default Home
const express = require('express');
const stripe = require('stripe')('sk_test_51QTomXG6l0iru7NuoCflWaDG9ApY7iCi9ESP1bhTtCHUqhUvYdelbg9CxZEb3lkckhcT373vcECi3KDisWoLoHDy00JbmlxIeQ')
const router = express.Router();

router.post('/',async (req, res) => {
    try{
        console.log(req.body)
        // const {} = req.body; 
        // const lineItems = [{
        //     price_data:{
        //         currency:"usd",
        //         product_data:{
        //             name:customerName,
        //             images: reservationId
        //         },
        //         unit_amount:Math.round(amount),
        //     },
        //     quantity:1
        // }]
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:req.body.map(item => {
                const storeItem = item._id;
                return{
                    price_data:{
                        currency:"usd",
                        product_data:{
                            name: 'Food'
                        },
                        unit_amount: 1000
                    },
                    quantity:item.quantity
                }
            }),
            mode:"payment",
            success_url:"http://localhost:3000",
            cancel_url:"http://localhost:3000"
        })
        res.json({url:session.url})
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

module.exports = router
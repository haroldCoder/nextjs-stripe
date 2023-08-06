"use client"
import axios from 'axios'

interface props {
    priceID: string,
    api_key_string: string
}

export default function ButtonCheckout({ priceID, api_key_string }: props) {
    console.log(api_key_string);
    
    return (
        <button className='bg-blue-700 px-5 py-2 rounded-full hover:bg-blue-600'
            onClick={async () => {
                axios.post('https://stripe-node-microservice.vercel.app/api/stripe/', {
                    "api_key_stripe":api_key_string,
                    "mode": "subscription",
                    success_url: "https://dashboard.stripe.com/",
                    cancel_url: "https://dashboard.stripe.com/",
                    priceId: priceID,
                    quantity: 1
                }).then((res)=>window.location.href = res.data
                )
            }}
        >Buy</button>
    )
}

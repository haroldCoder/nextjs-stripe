import { NextApiRequest } from 'next';
import { ProductStripe } from '../ProductStripe/ProductStripe';
import { NextResponse } from 'next/server'



export const GET = async() => {
    const products = new ProductStripe(process.env.STRIPE_SECRET_KEY!)

    return NextResponse.json({
        products: await products.getProducts()
    })
}

export const getPrices = async() =>{
    const prices : Array<any> = await (await fetch(`https://stripe-node-microservice.vercel.app/api/stripe/${process.env.STRIPE_SECRET_KEY!}`)).json()
    return prices;
}


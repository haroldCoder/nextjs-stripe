import { ProductStripe } from '../ProductStripe/ProductStripe';
import { NextResponse } from 'next/server'



export const GET = async(reques: Request) => {
    const {api_key} = await reques.json()
    const products = new ProductStripe(api_key ? api_key : process.env.STRIPE_SECRET_KEY!)
    console.log(products.getProducts());
    
    return NextResponse.json({
        products: await products.getProducts()
    })
}


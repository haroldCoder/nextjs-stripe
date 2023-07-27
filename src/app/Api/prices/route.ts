import { ProductStripe } from '../../ProductStripe/ProductStripe';
import { NextResponse } from 'next/server'



export const GET = async() => {
    const products = new ProductStripe(process.env.STRIPE_SECRET_KEY!)
    console.log(products.getProducts());
    
    return NextResponse.json({
        products: await products.getProducts()
    })
}


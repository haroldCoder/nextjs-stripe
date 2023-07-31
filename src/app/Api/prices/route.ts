import { NextApiRequest } from 'next';
import { ProductStripe } from '../ProductStripe/ProductStripe';
import { NextResponse } from 'next/server'



export const GET = async(reques: NextApiRequest) => {
    const api_key = await new URL(reques.url!).toString().match(/=([^&]*)/);
    const products = new ProductStripe(api_key?.toString().replace("=","") || process.env.STRIPE_SECRET_KEY!)
    console.log(products.getProducts());
    
    return NextResponse.json({
        products: await products.getProducts()
    })
}


import { ProductStripe } from "@/app/api/ProductStripe/ProductStripe";
import { NextResponse } from "next/server";


export const POST = async(request: Request) =>{
    const {priceid, api_key, mode, name, unit} = await request.json()
    
    const ps = await new ProductStripe(api_key ? api_key : process.env.STRIPE_SECRET_KEY!).createSesion(mode ? mode : 'subscription', priceid, name, unit)

    return NextResponse.json({
        url: ps
    })
}
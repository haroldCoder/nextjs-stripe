import { ProductStripe } from "@/app/ProductStripe/ProductStripe";
import { NextResponse } from "next/server";


export const POST = async(request: Request) =>{
    const {priceid} = await request.json()
    
    await new ProductStripe(process.env.STRIPE_SECRET_KEY!).createSesion('subscription', priceid)

    return NextResponse.next()
}
import { Mode } from "fs";
import Stripe from "stripe";

export class ProductStripe {
    stripe: Stripe
    constructor(secretkey: string) {
        this.stripe = new Stripe(secretkey, {
            apiVersion: '2022-11-15',
        });
    }
    getProducts = async() =>{
        const prices = (await this.stripe.prices.list()).data
        return prices;
    }

    createSesion = async(mode: Stripe.Checkout.SessionCreateParams.Mode, priceid: string) =>{
        await this.stripe.checkout.sessions.create({
            mode: mode,
            payment_method_types: ['card'],
            success_url: "https://localhost:3000/success",
            cancel_url: "https://localhost:3000/pricing",
            line_items: [
                {
                    price: priceid,
                    quantity: 1
                }
            ]
        })
    }
}
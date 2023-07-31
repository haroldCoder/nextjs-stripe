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

    createSesion = async(mode: Stripe.Checkout.SessionCreateParams.Mode, priceid?: string) =>{
        let session : Stripe.Response<Stripe.Checkout.Session> = await this.stripe.checkout.sessions.create({
            mode: mode,
            payment_method_types: ['card'],
            success_url: "/success",
            cancel_url: "/",
            line_items: [
                {
                    price: priceid,
                    quantity: 1
                }
            ],
        })
        return session!.url;
        
    }
}
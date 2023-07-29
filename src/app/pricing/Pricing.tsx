import React from 'react'
import { ProductStripe } from '../api/ProductStripe/ProductStripe'
import ButtonCheckout from '../components/ButtonCheckout';

async function Pricing() {
    const prices = new ProductStripe(process.env.STRIPE_SECRET_KEY!);

    return (
        <div className='p-7' id='pricing'>
            <div className='mt-8 flex justify-evenly'>
                {
                    (await prices.getProducts()).sort((a, b)=>a.unit_amount! - b.unit_amount!).map(e => (
                        <div className='bg-gradient-to-b text-center w-[15%] flex flex-wrap justify-between h-[30vh] flex-col from-gray-500 to-gray-900 rounded-md p-4 text-white' key={e.id}>
                            <h2>{e.nickname}</h2>
                            <h3 className='text-3xl font-bold text-gray-400'>{e.unit_amount! / 100}$</h3>
                            <ButtonCheckout priceID={e.id} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Pricing
import React from 'react'
import ButtonCheckout from '../components/ButtonCheckout';
import { getPrices } from '../api/prices/route';

async function Pricing() {

    return (
        <div className='p-7' id='pricing'>
            <div className='mt-8 flex justify-evenly'>
                {
                    (await getPrices()).sort((a, b)=>a.unit_amount! - b.unit_amount!).map(e => (
                        <div className='bg-gradient-to-b text-center w-[15%] flex flex-wrap justify-between h-[30vh] flex-col from-gray-500 to-gray-900 rounded-md p-4 text-white' key={e.id}>
                            <h2>{e.nickname}</h2>
                            <h3 className='text-3xl font-bold text-gray-400'>{e.unit_amount! / 100}$</h3>
                            <ButtonCheckout priceID={e.id} api_key_string={process.env.STRIPE_SECRET_KEY!} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Pricing
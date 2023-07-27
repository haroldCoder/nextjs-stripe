import React from 'react'
import { ProductStripe } from '../ProductStripe/ProductStripe'

async function Page() {
    const prices = await new ProductStripe(process.env.STRIPE_SECRET_KEY!);

    return (
        <div>
            <header>
                <h1>Pricing</h1>
            </header>
            <div className='flex justify-evenly'>
                {
                    (await prices.getProducts()).map(e => (
                        <div className='bg-gradient-to-b text-center w-[15%] flex flex-wrap justify-between h-[20vh] flex-col from-gray-500 to-gray-900 rounded-md p-4 text-white' key={e.id}>
                            <h2>{e.nickname}</h2>
                            <h3>{e.unit_amount! / 100} {e.currency.toUpperCase()}</h3>
                            <button className='bg-blue-700 px-5 py-2 rounded-md hover:bg-blue-600'>Buy</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Page
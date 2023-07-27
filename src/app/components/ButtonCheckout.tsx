"use client"

interface props{
    priceID: string
}

export default function ButtonCheckout({priceID}: props) {
  return (
    <button className='bg-blue-700 px-5 py-2 rounded-full hover:bg-blue-600'
        onClick={async()=>{
            const data =  await fetch('/api/checkout',{
                method: "POST",
                body: JSON.stringify({
                    priceid: priceID
                }),
                headers:{
                    "Content-type": "application/json"
                }
            })
            const dt = await data.json()
            console.log(dt);
            
        }}
    >Buy</button>
  )
}

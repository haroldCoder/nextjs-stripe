import React from 'react'
import npm from '../../assets/imgs/npm.png'
import stripe from '../../assets/imgs/stripe.png';
import next from '../../assets/imgs/nextjs.png'
import tailwind from '../../assets/imgs/tailwindcss.png'
import Image from 'next/image';

export default function About() {
  return (
    <div id='about' className='mt-16 py-28 bg-gray-800 flex flex-col flex-wrap justify-center content-center'>
        <section>
            <h2 className='title text-center text-5xl bg-gradient-to-b bg-clip-text transition-colors duration-200 ease-in-out text-transparent to-gray-400 from-gray-700'><a href="https://harold-enyoi.netlify.com/">Visit creator<span className='text-yellow-500 ml-3'>👍</span></a></h2>
        </section>
        <section className='flex mt-12 justify-center gap-x-20'>
            <div className={`bg-gray-700 opacity-20 rounded-full hover:scale-[1.2]`}>
                <Image src={npm} alt='npm' className='w-20 h-20 m-0' />
            </div>
            <div className={`bg-gray-700 opacity-20 rounded-full hover:scale-[1.2]`}>
                <Image src={stripe} alt='npm' className='w-20 h-20 m-0' />
            </div>
            <div className={`bg-gray-700 opacity-10 rounded-full hover:scale-[1.2]`}>
                <Image src={next} alt='nextjs' className='w-20 h-20 m-0' />
            </div>
            <div className={`bg-gray-900 opacity-10 rounded-full hover:scale-[1.2]`}>
                <Image src={tailwind} alt='tailwincss' className='w-20 h-20 m-0' />
            </div>
        </section>
    </div>
  )
}

"use client"
import React, { useEffect, useState } from 'react'

export default function Jumbotron() {
    const [gradient, setGradient] = useState<boolean>(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setGradient(!gradient)
        }, 3000);

        return () => clearInterval(timer)
    }, [gradient])


    return (
        <div className='p-16 mt-16 bg-gray-600' id='jumbotron'>
            <header className='mb-9'>
                <h1 className={`title text-5xl bg-gradient-to-b bg-clip-text transition-colors duration-200 ease-in-out text-transparent ${!gradient ? 'from-blue-600 to-slate-100' : 'to-gray-400 from-gray-700'}`}>Vip koderx.</h1>
            </header>

            <section className='text w-[45%] px-4'>
                <p className='text-white'>
                    This is a website where you can purchase subscriptions to various community services.
                    There are three different price options available, catering to the preferences of the customers.
                    In the future, more plans will be introduced, each offering its own unique features and advantages over others.
                    Each plan is tailored to cater to specific needs, providing essential services and exclusive benefits to the subscribers.
                    Whether you are seeking basic functionalities or seeking premium services, our platform has a subscription plan designed just for you.
                    Stay tuned for upcoming updates as we continue to expand our offerings to better serve our valued community members.
                </p>
            </section>
        </div>
    )
}

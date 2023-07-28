import React from 'react'
import DashboardPage from '../dashboard/page'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoyaltyRoundedIcon from '@mui/icons-material/LoyaltyRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export default function Nav() {
  
  return (
    <div className='p-4 pl-10 top-0 w-100 flex justify-end fixed w-full bg-black'>
      <div className='flex w-[60%] justify-between items-center'>
        <section className='flex gap-x-12'>
            <a href="#jumbotron"><HomeRoundedIcon className='text-white hover:text-blue-600 cursor-pointer' style={{fontSize: "30px"}} /></a>
            <a href="#pricing"><LoyaltyRoundedIcon className={`text-white  hover:text-blue-600 cursor-pointer`} style={{fontSize: "30px"}} /></a>
            <InfoRoundedIcon className='text-white hover:text-blue-600 cursor-pointer' style={{fontSize: "30px"}} />
        </section>
        <section>
            <DashboardPage />
        </section>
      </div>
    </div>
  )
}

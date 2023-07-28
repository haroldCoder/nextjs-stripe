import React from 'react'
import DashboardPage from '../dashboard/page'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoyaltyRoundedIcon from '@mui/icons-material/LoyaltyRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export default function Nav() {
  return (
    <div className='p-4 pl-10 w-100 bg-gray-900 flex justify-between items-center'>
        <section className='flex gap-x-8'>
            <HomeRoundedIcon className='text-white hover:text-blue-600 cursor-pointer' style={{fontSize: "30px"}} />
            <LoyaltyRoundedIcon className='text-white hover:text-blue-600 cursor-pointer' style={{fontSize: "30px"}} />
            <InfoRoundedIcon className='text-white hover:text-blue-600 cursor-pointer' style={{fontSize: "30px"}} />
        </section>
        <section>
            <DashboardPage />
        </section>
    </div>
  )
}

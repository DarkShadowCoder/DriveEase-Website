import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='max-w-screen-xl w-full h-8 px-8 my-4 flex flex-nowrap items-center justify-between'>
        <div className=' '>
            <Image
            src={"/driveasy-logo.webp"}
            width={100}
            height={20}
            alt='DriveEase logo'
            />
        </div>
        <div className='flex justify-between items-center w-auto h-full gap-8 lg:gap-14'>
            <a href='#' className='text-orange-500 font-medium cursor-pointer'>Home</a>
            <a href='#booking' className='text-white/80 font-medium cursor-pointer duration-300 hover:text-orange-500 hover:ease-in'>Booking</a>
            <a href='#aboutus' className='text-white/80 font-medium cursor-pointer duration-300 hover:text-orange-500 hover:ease-in'>About us</a>
            <a href='#contactus' className='text-white/80 font-medium cursor-pointer duration-300 hover:text-orange-500 hover:ease-in'>Contact us</a>
        </div>
        <div className='w-auto h-full p-4 flex justify-center items-center text-white/80 font-medium rounded-sm bg-orange-500 cursor-pointer'>
            Login/Signup
        </div>
    </div>
  )
}

export default Navbar

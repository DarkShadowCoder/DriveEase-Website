import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='max-w-screen-xl flex flex-nowrap mt-14 px-8 py-8'>
        <div className='w-full h-full flex flex-col lg:justify-start lg:items-start justify-center items-center gap-8 z-30 lg:pt-8'>
            <h1 
            className='text-4xl text-start inline-block font-semibold leading-tight text-white'>
              Rent Your Perfect Ride 
              <span className='text-orange-500'> {''}Anytime, Anywhere</span>
            </h1>
            <p className='text-white/80 lg:w-[40%] w-[70%] lg:text-justify text-center'>
              Find book, and drive the car of your dreams with DriveEase! Experience seamless car rentals with our user-friendly app.
              Offering a wide range of vehicules, instant booking and 24/7
            </p>
            <button type="button" className='w-auto h-full p-4 flex justify-center items-center text-white/80 font-medium rounded-sm bg-orange-500 cursor-pointer'>
              Book a car →
            </button>
        </div>
        <div className='absolute z-10 right-12 bottom-2 xl:flex hidden'>
            <Image 
            src={"/car.webp"} 
            alt='car' 
            width={980} 
            height={700}
            />
        </div>
    </div>
  )
}

export default Hero
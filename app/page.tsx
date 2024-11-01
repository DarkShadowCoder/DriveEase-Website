import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

function Home() {
  return (
    <div className=' flex flex-col items-center'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
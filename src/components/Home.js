import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroImage from '../assets/hero.png'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1200px] w-[100%] px-3  mx-auto  md:min-w-[25%]  sm:flex  overflow-hidden pb-0'>
        <div className='sm:w-[50%]  flex flex-col justify-center items-start text-center sm:text-start mt-14 sm:mt-0'>
          <p className='mb-5 text-sm text-gray-400 mx-auto sm:ml-0'>Unlock Your Imagination</p>
          <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black'>Welcome to our <span className='text-[#ea4b8b] leading-normal logo-font'>Creative</span> Hub</h1>
          <p className='text-md mt-5 text-gray-500 leading-loose'>Join a dynamic community of creators, innovators, and dreamers. Discover, collaborate, and bring your ideas to life.</p>

          <a href='/signup' className='mx-auto sm:ml-0'><button className='bg-[#ea4b8b] hover:bg-[#ea4b8b99] mt-5 px-6 min-w-[200px] py-3 rounded-lg text-sm text-white transition-all'>Explore</button></a>
        </div>

        <div className='sm:w-[50%]  flex justify-center sm:justify-end'>
          <img className='w-[100%] object-cover' src={HeroImage} alt='' />
        </div>
      </div>

      <Footer />
    </div >
  )
}

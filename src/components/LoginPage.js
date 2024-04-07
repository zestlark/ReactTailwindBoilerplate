import React from 'react'
import Image1 from '../assets/img1.png'

export default function LoginPage() {
    return (
        <div className='md:flex'>
            <div className='bg-[#f2d184] md:min-w-[25%] py-[60px] h-screen'>
                <div className='w-[80%] max-w-sm mx-auto text-[#866518]'>
                    <p className='text-[#866518]'>dribble</p>
                    <h1 className='font-bold text-2xl mt-5'>
                        Discover the world's top
                        Designers & Creatives.</h1>
                </div>

                <img className='w-[100%] max-w-[400px] drop-shadow-grey md:h-[80%] object-cover' src={Image1} alt='' />

                <div className='w-[80%] max-w-sm mx-auto text-[#866518]'>
                    <p className='text-[#866518] text-md'>Art by <a className='underline' href='https:\\zestlark-0.web.app'>zestlark</a></p>
                </div>
            </div>
            <div className='bg-white-100 py-[60px] h-screen'>
                form
            </div>
        </div>
    )
}

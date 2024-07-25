/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-orange-500' src={assets.arrow_left} alt=''/>
                <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-orange-500' src={assets.arrow_right} alt=''/>
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-gradient-to-r from-rose-600 via-amber-500 to-pink-600 bg-white hover:scale-110 text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                <p className='py-1 px-3 rounded-2xl text-[15px] text-black cursor-pointer bg-rose-500 hover:scale-110'>Install App</p>
                <p className='bg-sky-500 text-black w-7 h-7 rounded-full cursor-pointer flex items-center justify-center hover:scale-110'>A</p>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 cursor-pointer rounded-2xl hover:bg-orange-500 hover:text-white hover:scale-110'>All</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
    </>
  )
}

export default Navbar
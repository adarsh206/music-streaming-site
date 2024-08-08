/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='bg-[#7b6f1f] min-h-screen pl-[4vw]'>
        <h1 className='mt-5 font-extrabold text-sm sm:text-xl md:text-2xl w-[max(10vw,100px)] 
        bg-gradient-to-r from-lime-600 via-amber-400 to-rose-500 text-transparent bg-clip-text'>REFRAIN</h1>

        <div className='flex flex-col gap-5 mt-10'>
            <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_orangered] text-sm font-medium'>
              <img src={assets.add_song} className='w-5' alt=''/>
              <p className='hidden sm:block font-bold'>Add Song</p>
            </NavLink>

            <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_orangered] text-sm font-medium'>
              <img src={assets.song_icon} className='w-5' alt=''/>
              <p className='hidden sm:block font-bold'>List Song</p>
            </NavLink>

            <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_orangered] text-sm font-medium'>
              <img src={assets.add_album} className='w-5' alt=''/>
              <p className='hidden sm:block font-bold'>Add Album</p>
            </NavLink>

            <NavLink to='list-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_orangered] text-sm font-medium'>
              <img src={assets.album_icon} className='w-5' alt=''/>
              <p className='hidden sm:block font-bold'>List Album</p>
            </NavLink>
            
    
        </div>
    </div>
  )
}

export default Sidebar
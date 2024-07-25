/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl text-amber-600'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {
                        albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))
                    }
                </div>
                
            </div>

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl text-rose-600'>Today's Biggest Hits</h1>
                <div className='flex overflow-auto'>
                    {
                        songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))
                    }
                </div>
                
            </div>
        </>
  )
}

export default DisplayHome
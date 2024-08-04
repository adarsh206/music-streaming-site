/* eslint-disable no-unused-vars */
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer />
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
          <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>

          </div>
      </div>
    </div>
  )
}

export default App
import React from 'react'
import imageData from '../../../config'

export default function CenteredComponent() {
  return (
    <div className='flex w-full justify-center items-center py-5'>
        <div className='max-w-6xl flex justify-evenly items-center w-full'>
        <div className='md:w-1/2 '>
            <img src={imageData[1].mainImage} alt="main-image" className="w-full h-auto" />
        </div>
        <div className='md:w-1/2'>
            <h1 className='text-5xl text-white'>𝗌ɦ𝗂𝗏α𐓣𝗂 𝗌ɦυ𝗄ᥣα</h1>
        </div>

        </div>
       
    </div>
  )
}

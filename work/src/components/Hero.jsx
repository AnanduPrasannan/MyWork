import React from 'react'
import photo from '../assets/image1.webp'
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div>
        <div className='grid grid-cols-2 container mx-auto  w-screen h-full'>
            <div>
                <div>
                    <img src={photo} alt="nothing" />
                </div>
            </div>

            <div className=''>
                <div className='text-orange-500 text-sm'>
                EXPERIENCE SKINCARE BLISS
                </div>
                
                <div className='text-3xl font-semibold'>
                    A Curation of Products and Services
                </div>
                <div className='flex items-center bg-black p-3 gap-2 w-full'>
                    <button className=' text-white text-sm font-medium'>SHOP NOW</button>
                    <span className='text-orange-500'><BsArrowRight /></span>
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default Hero
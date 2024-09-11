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
                
                <div className='text-3xl font-semibold w-72  space-y-5 '>
                    A Curation of Products & Services
                </div>
                <div className='flex items-center  p-3 gap-2 w-full '>
                    <button className=' text-white bg-black text-sm  font-medium  w-32 p-2'>SHOP NOW</button>
                    <span className='text-orange-500 -ml-6 pr-4'><BsArrowRight /></span>
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default Hero
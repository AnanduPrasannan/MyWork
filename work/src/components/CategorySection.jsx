import React from 'react'
import body from '../assets/body.jpg'
import fragrance from '../assets/fragrance.webp'
import hair from '../assets/hair.png'
 import kits from '../assets/kits.webp'
 import supplements from '../assets/supplements.webp'

const CategorySection = () => {
  return (
    <div className='flex justify-center  h-screen '>
        <div>
            <div className='flex flex-col justify-center items-center'>

            <div className='text-orange-500 text-sm'>
                DISCOVER OUR RANGE OF PRODUCTS
            </div>
            <div className='text-2xl font-medium'>
                Shop By Category
            </div>
            </div>
            <div className='flex gap-5'>
                <div>
                <img src={hair} alt='hair' className='w-32 h-32 rounded-full' />
                <div className='flex justify-center items-center'>
                <span >Hair</span>
                </div>
                </div>
                

                <div>

                <img src={body} alt="body" className='w-32 h-32 rounded-full' />
                <div className='flex justify-center items-center'>
                <span >Body</span>
                </div>
                </div>
                <div>

                <img src={fragrance} alt="fragrance" className='w-32 h-32 rounded-full' />
                <div className='flex justify-center items-center'>
                <span >Fragrance</span>
                </div>
                </div>
                <div>

                <img src={kits} alt="kits" className='w-32 h-32 rounded-full' />
                <div className='flex justify-center items-center'>
                <span >Kits</span>
                </div>
                </div>
                <div>

                <img src={supplements} alt="supplements" className='w-32 h-32 rounded-full'/>
                <div className='flex justify-center items-center'>
                <span >Supplements</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategorySection
import React from 'react'
import body from '../assets/body.jpg'
import fragrance from '../assets/fragrance.webp'
import hair from '../assets/hair.png'
 import kits from '../assets/kits.webp'
 import supplements from '../assets/supplements.webp'

const NextPage = () => {
  return (
    <div className='flex justify-center  h-screen '>
        <div>
            <div className='text-orange-500 text-sm'>
                DISCOVER OUR RANGE OF PRODUCTS
            </div>
            <div className='text-2xl font-medium'>
                Shop By Category
            </div>
            <div className='flex gap-5'>
                <div>
                <img src={hair} alt='hair' className='w-32 h-32 rounded-full' />
                <span >Hair</span>
                </div>
                

                <div>

                <img src={body} alt="body" className='w-32 h-32 rounded-full' />
                <span>Body</span>
                </div>
                <div>

                <img src={fragrance} alt="fragrance" className='w-32 h-32 rounded-full' />
                <span>Fragrance</span>
                </div>
                <div>

                <img src={kits} alt="kits" className='w-32 h-32 rounded-full' />
                <span>Kits</span>
                </div>
                <div>

                <img src={supplements} alt="supplements" className='w-32 h-32 rounded-full'/>
                <span>Supplements</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NextPage
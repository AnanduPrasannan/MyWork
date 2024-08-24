import React from 'react'
import bseller1 from '../assets/bseller1.webp'
import bseller2 from '../assets/bseller2.webp'
import bseller3 from '../assets/bseller3.webp'
import bseller4 from '../assets/bseller4.webp'

const BestSellers = () => {
  return (
    <div>
        <div className='flex flex-col  items-center'>
            <div >
               <h1>BestSellers</h1>
            </div>
            <div className='flex '>
              <div>
              <img src={bseller1} alt=""  className='w-32 h-32'/>
              <div className='flex flex-col justify-center items-center'>
              <span>name</span>
              <span>price</span>
              </div>
              </div>
              <div>
              <img src={bseller2} alt=""  className='w-32 h-32'/>
              <div className='flex flex-col justify-center items-center'>
              <span>name</span>
              <span>price</span>
              </div>
              </div>
              <div>
              <img src={bseller3} alt=""  className='w-32 h-32'/>
              <div className='flex flex-col justify-center items-center'>
              <span>name</span>
              <span>price</span>
              </div>
              </div>
              <div>
              <img src={bseller4} alt=""  className='w-32 h-32'/>
              <div className='flex flex-col justify-center items-center'>
              <span>name</span>
              <span>price</span>
              </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default BestSellers
import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
    return (
        <div>
            <div className='flex container mx-auto justify-between w-screen h-48 border border-red-900 pt-4 '>

                <div className='space-x-4'>
                    <span className='font-medium text-sm hover:opacity-40 cursor-pointer'>
                      ALL PRODUCTS
                    </span>
                    <span className='font-medium text-sm'>
                    NEW IN
                    </span>
                    <span className='font-medium text-sm'>
                        BESTSELLERS
                    </span>
                </div>
                <div className='w-48'>
                    <div className='text-center tracking-widest font-semibold text-2xl opacity-50 '>
                       BEAUTY PIE
                    </div>
                </div>
                <div className='space-x-4'>
                    <span className='font-medium text-sm'>
                        BACKIN STOCK
                    </span>
                    <span className='font-medium text-sm'>
                        SKIN CARE
                    </span>
                    <span className='font-medium text-sm'>
                        MORE
                    </span>
                </div>
                <div className='flex  space-x-4'>
                    <span >
                        search
                    </span>
                    <span >
                    <LuUserCircle2 />
                    </span>
                    <span>
                    <AiOutlineShoppingCart />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
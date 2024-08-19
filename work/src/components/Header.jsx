import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
    return (
        <div>
            <div className='flex container mx-auto justify-between w-screen h-48 border border-red-900'>

                <div>
                    <span>
                      ALL PRODUCTS
                    </span>
                    <span>
                    NEW IN
                    </span>
                    <span>
                        BESTSELLERS
                    </span>
                </div>
                <div>
                    <div className='tracking-widest font-semibold text-2xl'>
                       BEAUTY PIE
                    </div>
                </div>
                <div>
                    <span>
                        BACKIN STOCK
                    </span>
                    <span>
                        SKIN CARE
                    </span>
                    <span>
                        MORE
                    </span>
                </div>
                <div>
                    <span>
                        search
                    </span>
                    <span>
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
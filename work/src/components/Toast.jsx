import React, { useEffect } from 'react'

const Toast = ({type,onClose,message}) => {
   

  
  useEffect(()=>{
    
    const timer=setTimeout(()=>{
      onClose()
    },5000)
    return ()=>{
      clearTimeout(timer)
    }
  },[onClose])

  const  styles=
  type === "success"?"fixed top-10 right-10 w-20 text-white bg-green-500 font-medium p-2 rounded-md  z-50":"fixed top-10 right-10 w-20 text-white bg-red-500 font-medium p-2 rounded-md  z-50"
  return (
    <div>
        <div className={styles}>
        <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
        </div>
    </div>
  )
}

export default Toast
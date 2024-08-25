import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm } from 'react-hook-form'
import * as apiClient from '../apiClient.js'
import {useMutation} from 'react-query' 
import { useAppContext } from '../context/AppContext.jsx'


const Login = () => {
    const {showToast}=useAppContext()
const {register,handleSubmit,formState:{errors}}=useForm()
const navigate=useNavigate()
const mutation=useMutation(apiClient.userLogin,{
    onSuccess:()=>{
        showToast({toast:"Logged in successfully",type:'success'})
        navigate('/')
    },
    onError:()=>{
        showToast({toast:"Error Logging in success",type:'error'})

    }

   })

    const onsubmit=handleSubmit((data)=>{
        mutation.mutate(data)
    })


  return (
    <div>
         <div className='h-screen flex justify-center items-center'>
        <div className=' p-10 w-1/3 h-auto shadow-2xl ' >
            <h1 className='font-bold text-2xl mt-5 mb-4'>Sign In</h1>
            <form action="" className='mb-8' onSubmit={onsubmit}>
               
                <div className='mb-4'>

                <label htmlFor=""  className='flex flex-col'>
                    Email
                    <input type="email" placeholder='Email' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none' {...register('email',{required:"Email is required"})} />
                    {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
                </label>
                </div>
                <div className='mb-4'>

                <label htmlFor="" className='flex flex-col'>
                Password
                    <input type="password" placeholder='Password' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none' {...register('password',{required:"Password field is required"})} />
                    {errors.password && (<span className='text-red-500'>{errors.password.message}</span>)}
                </label>
                </div>
               
                <button className='bg-blue-400 p-2 rounded-md text-white hover:opacity-80 shadow-md w-full'>Sign In</button>
            </form>
            <div >
                <Link to='/'className='border border-blue-600 text-blue-600 p-2 hover:bg-blue-600 hover:text-white  hover:opacity-60 flex justify-center rounded-sm' >Dont have an account yet? Register</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
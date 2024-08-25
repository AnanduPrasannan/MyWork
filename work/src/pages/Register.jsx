import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import *  as apiClient from '../apiClient'
import {useMutation} from 'react-query'

const Register = () => {
    
    const {register,watch,handleSubmit,formState:{errors}}=useForm()

   const mutation=useMutation(apiClient.userRegister,{
    onSuccess:()=>{
        console.log('data sent to backend')
    },
    onError:(error)=>{
        console.log('data not sent to backend',error.message)
    }

   })

 const onsubmit=handleSubmit((data)=>{
    console.log(data)
   mutation.mutate(data)
 })
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className=' p-10 w-1/3 h-auto shadow-2xl ' >
            <h1 className='font-bold text-2xl mt-5 mb-4'>Sign Up</h1>
            <form action="" className='mb-8' onSubmit={onsubmit}>
                <div className='mb-4'>

                <label htmlFor="" className='flex flex-col '>
                    Name
                    <input type="text"   placeholder='Name' className='border border-gray-400 p-1  rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500  outline-none' {...register('name',{required:"Name field is required"})} />
                    
                {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
                </label>
                </div>
                <div className='mb-4'>

                <label htmlFor=""  className='flex flex-col'>
                    Email
                    <input type="email" placeholder='Email'  className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none'{...register('email',{required:"Email field is required"})} />
                    {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
                </label>
                </div>
                <div className='mb-4'>

                <label htmlFor="" className='flex flex-col'>
                Password
                <input type="password" placeholder='Password' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none' {...register('password',{required:"Password field is required",minLength:{value:6,message:"Password should be atleast 6 characters"}})} />
                {errors.Password && (<span className='text-red-500'>{errors.Password.message}</span>)}
                </label>
                </div>
                <div className='mb-4'>

                <label htmlFor="" className='flex flex-col'>
                Confirm Password
                    <input type="password" placeholder='Confirm Password'   className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none' {...register('ConfirmPassword',
                        {validate:(val)=>{
                            if(!val){
                                return "This field is required"
                            }
                           else if(watch('Password')!==val)
                        {return "password mismatch"}}})} />
                        {errors.ConfirmPassword && (<span className='text-red-500'>{errors.ConfirmPassword.message}</span>) }
                </label>
                </div>
                <button type='submit' className='bg-blue-400 p-2 rounded-md text-white hover:opacity-80 shadow-md w-full'>Sign Up</button>
            </form>
            <div >
               <Link to='/login' className='border border-blue-600 text-blue-600 p-2 hover:bg-blue-600 hover:text-white  hover:opacity-60 flex justify-center rounded-sm'>Already have an account?Sign In</Link> 
            </div>
        </div>
    </div>
  )
}

export default Register
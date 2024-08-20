import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/user.js'
import { check, validationResult } from 'express-validator'

const router=express.Router()

router.post('/login',[check('email','Email field is required').isEmail(),
                    check('password','Password is required').isLength({min:6})
],async (req,res)=>{

    let results=validationResult(req)
    if(!results.isEmpty()){
        return res.status(400).json({message:results.array()})
    }
    try{
        let {email,password}=req.body
        let user=await User.findOne({email})

        if(!user){
           return res.status(400).json({message:"Email or password wrong"})
        }
        let isMatch= await bcrypt.compare(password,user.password)

        if(!isMatch){
           return res.status(400).json({message:"Email or password wrong"})
        }

        const token=jwt.sign({userId:user._id},process.env.SECRET_KEY,{
            expiresIn:'1h'
        })
        
        res.cookie('auth_token',token,{
            maxAge:8640000,
            httpOnly:true
        })
        res.status(200).json({userId:user._id})
    }
   catch(err){
    res.status(500).json({message:"Error anandu"})
    console.log(err)
   }
   
})

export default router
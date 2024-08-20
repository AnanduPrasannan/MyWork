import express from 'express'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import {check, validationResult} from 'express-validator'

const router=express.Router()

router.post('/register',[check('name','This field is required').isString(),
                        check('email','Email is required').isEmail(),
                        check('password','Password is required').isLength({min:6})
],async (req,res)=>{

    let results=validationResult(req)
    if(!results.isEmpty()){
        return res.status(400).json({message:results.array()})
    }

    try{
        let user=await User.findOne({email:req.body.email})
        if(user){
            res.status(400).json({message:"Email already exist"})
        }
        user=new User(req.body)
        await user.save()
        const token=jwt.sign({userId:user._id},process.env.SECRET_KEY,{
            expiresIn:'1h'
        })
        
        res.cookie('auth_token',token,{
            maxAge:8640000,
            httpOnly:true
        })
       return res.status(200).json({message:"User saved Succesfully"})
    }
   catch(err){
    res.status(500).json({message:"Error anandu"})
    console.log(err)
   }
})

export default router
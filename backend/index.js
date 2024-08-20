import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser' 
import mongoose from 'mongoose'
import userRegister from './routes/user.js'
import userLogin from './routes/auth.js'

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongo connected"))
const app=express()

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/api/users',userRegister)
app.use('/api/auth',userLogin)


app.listen(3000,()=>{
    console.log('Server started running')
})
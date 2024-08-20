
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true,
    min:6,
    max:20
}
})
userSchema.pre('save',async function (next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,8)
    }
    next()
})
const User=mongoose.model('User',userSchema)

export default User
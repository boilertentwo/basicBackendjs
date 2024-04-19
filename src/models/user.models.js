import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

const userSchema= new mongoose.Schema({
    username:{
        type : String,
        required: true,
        unique: true,
        lowercase: true,
        trim : true,
        index : true
    },
    email:{
        type : String,
        required: true,
        unique: true,
        lowercase : true,
        trim: true
    },
    fullname:{
        type: String,
        required : true,
        trim : true,
        index: true
    },
    avatar:{
        type: String,
        required : true
    },
    coverimage:{
        type: String
    },
    watchhistory:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password:{
        type : String,
        required: [true,"Password is must!"]
    },
    refreshtoken:{
        type: string
    }

},{timestamps:true})

userSchema.pre('save',async function(next){
   if(this.isModified("password")){
    this.password = bcrypt.hash(this.password,10)
    next()
   }
   else{
    return next();
   }
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User",userSchema);
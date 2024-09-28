import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        
    },
    img:{
        type:String,

    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },

},{timestamps:true})



const productschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
     
    },
    desc:{
        type:String,
        required:true,


    },
    price:{
        type:String,
        required:true,
        min:0
        
    },
    stock:{
        type:String,
        required:true,
        min:0
        
    },
    img:{
        type:String,

    },
   
    color:{
        type:String
    },
    size:{
        type:String
    },

},{timestamps:true})

export const User = mongoose.models.User || mongoose.model("User",userschema)
export const Product = mongoose.models.Product || mongoose.model("Product",productschema)
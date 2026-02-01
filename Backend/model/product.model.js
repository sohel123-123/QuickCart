import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:[true,'Image is required']
    },
    image:{
        type:String,
        required:[true,'Image is required']

    },
    category:{
        type:String,
        required:true
    },
    isFeatured:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const product = mongoose.model("product",productSchema);

export default product;
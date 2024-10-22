import mongoose from "mongoose";
const {Schema} = mongoose;

const productSchema = new Schema({
    productname:String,
    productprice:Number,
    productdescription:String,
    categoryid:Number,
    brandid:Number,
    productpath:String
})

const productModel = mongoose.model('products',productSchema)
export default productModel;

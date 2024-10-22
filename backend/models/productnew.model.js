import mongoose from 'mongoose';

const {Schema} = mongoose;

var productnewSchema = new Schema({
    productname:String,
    productprice:Number,
    productdiscount:Number,
    productdescription:String,
    categoryid:String,
    brandid:String,
    productpath:String
})

const productnewModel = mongoose.model('newproducts',productnewSchema)
export default productnewModel;
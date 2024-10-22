import mongoose from "mongoose";
const {Schema} = mongoose;

const brandSchema = new Schema({
    brandname:String
})

var brandModel = mongoose.model("brands",brandSchema);
export default brandModel;
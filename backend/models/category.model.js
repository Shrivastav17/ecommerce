import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryid : Number,
    categoryname : String
})

const categoryModel = mongoose.model('categories',categorySchema);
export default categoryModel
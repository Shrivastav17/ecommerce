import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    username : String,  
    useremail : String,
    usermobile : Number,
    userpass : String,
    
})

const userModel = mongoose.model('users',userSchema);

export default userModel;
    
import mongoose from "mongoose";

async function dbconnection(){
    return await mongoose.connect('mongodb+srv://admin:xZzSp6RU6SvitTU0@cluster0.nccscc9.mongodb.net/task')
}

export default dbconnection;
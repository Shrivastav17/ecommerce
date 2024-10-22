import express from "express";
import userRouter from "./routes/user.route.js";
import categoryRouter from "./routes/category.route.js";
import brandRouter from "./routes/brand.route.js";
import productRouter from "./routes/product.route.js";
import bodyParser from "body-parser";
import dbconnection from "./database/mongodb.js";
import cors from 'cors';
import adminRouter from "./routes/admin.route.js";
import authRouter from "./routes/auth.route.js";
import router from "./routes/category-brand.route.js";

dbconnection()
.then(res=> {
    console.log("Database Connected");
})
.catch(err => {
    console.log(err);
})
const app = express();
app.use('/Assets', express.static("Assets"))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/users',userRouter)
app.use('/categories',categoryRouter)
app.use('/brands',brandRouter)
app.use('/products',productRouter)
app.use('/auth',authRouter)
app.use('/admin',adminRouter)
app.use('/category-brand',router)

app.listen(8090,()=>{
    console.log("Server is running on port 8090")
})

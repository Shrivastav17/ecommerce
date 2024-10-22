import brandModel from "../models/brand.model.js";
import categoryModel from "../models/category.model.js";

// function myfunc(req,res){
//     brandModel.find({},(err,data)=>{
//         categoryModel.find({},(err1,data1)=>{
//             res.send({category:data1,brand:data})
//         })
//     })
// }
async function myfunc(req,res){
    var response = await brandModel.find()
    var response1 = await categoryModel.find()

    res.send({category:response1,brand:response})
}

export {myfunc}
import multer from "multer";
import productnewModel from "../models/productnew.model.js";
import categoryModel from "../models/category.model.js";

var timeStamp = Date.now();

const fileSetting = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Assets/Uploads/')
    },
    filename: function (req, file, cb) {
        cb(null,timeStamp+file.originalname)
    }
})
const upload = multer({ storage: fileSetting }).single('productpath')


// const addCategory = async(req,res) => {
//     try{
//         var categoryValue = await categoryModel.find({categoryname:req.body.categoryname})
//         if(categoryValue.length > 0){
//             res.status(200).send({msg:'Category already Exist',data:null})
//         }
//         else{
//             var instance = categoryModel(req.body)
//             var ans_insert = await instance.save()
//             res.status(200).send({msg:'added',data:ans_insert})
//         }
//     }
//     catch(err){
//         console.log(err)
//         res.status(403).send({err})
//     }
//     //res.send({msg :"test"})
// }

const addProduct = (req,res) => {
    upload(req,res,async function (err) {
        if(err instanceof multer.MulterError){
            console.log(err);
        }else if(err){
            console.log(err);
        }
        console.log(req.body,req.file);
        var dataToInsert = req.body;
        dataToInsert.productpath = req.file.filename;

        try{
            var instance = new productnewModel(dataToInsert)
            var ans_insert = await instance.save()

            res.status(200).send({msg:'added',data:ans_insert})
        }
        catch(err){
            console.log(err);
            res.status(403).send({err})
        }
    })
    //res.send({msg :"test1"})
}
const showNewProduct = async (req, res) => {
    try {
        var ansAfterGet = await productnewModel.find()
        res.status(200).send({ msg: 'Product Shown', data: ansAfterGet })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ error: err })
    }
    //res.send({ msg: 'Show Product Function Called' })
}


const showProductByCategory = async(req,res)=>{
    // console.log(req.params); //{catid:7as6d78a6s8dasd7686}
    // res.send({msg:"A" , data:[]})

    try {
        var ansAfterGet = await productnewModel.find({categoryid:req.params.catid})
        res.status(200).send({ msg: 'Product Shown', data: ansAfterGet })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ error: err })
    }
}
const showProductByBrand = async(req,res)=>{
    // console.log(req.params); //{catid:7as6d78a6s8dasd7686}
    // res.send({msg:"B",data:[]})

    try {
        var ansAfterGet = await productnewModel.find({brandid:req.params.brid})
        res.status(200).send({ msg: 'Product Shown', data: ansAfterGet })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ error: err })
    }

}


const showProductByIdFunction = async (req, res) => {
    console.log(req.params);// {proid:54as6a9s78dad7a98sad}
    try {
        // var ansAfterGet = await productnewModel.find({_id:req.params.proid});
        var ansAfterGet = await productnewModel.findById(req.params.proid);
        console.log(ansAfterGet);
        res.status(200).send({ msg: 'Product Shown', data: ansAfterGet })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ error: err })
    }
    //res.send({ msg: 'Show Product Function Called' })
}


export {
    // addCategory,
    addProduct,
    showNewProduct,
    showProductByCategory,
    showProductByBrand,
    showProductByIdFunction
}
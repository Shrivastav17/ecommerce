import { encryptdata } from "../middlewares/encrypt.middleware.js";
import userModel from "../models/user.model.js";
import categoryModel from "../models/category.model.js";
import brandModel from "../models/brand.model.js";
import productModel from "../models/product.model.js";

const addUser = async(req,res) => {
    req.body.userpass = encryptdata(req.body.userpass)
    //console.log(req.body);

    try{
        var emailValue = await userModel.find({useremail:req.body.useremail});
        //console.log(emailValue)
        if (emailValue.length > 0){
            res.status(200).send({msg: 'Email Exist', data:null})
        }
        else{
            var instance = new userModel(req.body)
            var ans_insert = await instance.save();
            res.status(200).send({msg:"Record Added",data:ans_insert})
        }
    }
    catch(err){
        console.log(err);
        res.status(403).send({msg:'Something went wrong', data:null})
    }
}

const addCategory = async(req,res) => {
    try{
        var catValue = await categoryModel.find({categoryname:req.body.categoryname})
        //console.log(catValue);
        if(catValue.length > 0){
            res.status(200).send({msg: 'Category Already Exist', data:null})
        }
        else{
            var instance = new categoryModel(req.body)
            var ans_insert = await instance.save();
            res.status(200).send({msg:"Record Added",data:ans_insert})
        }
    }
    catch(err){
        console.log(err);
        res.status(403).send({msg:'Something went wrong', data:null})
    }
}

const addBrand = async(req,res) => {
    try{
        var BrValue = await brandModel.find({brandname:req.body.brandname})
        //console.log(BrValue);
        if(BrValue.length > 0){
            res.status(200).send({msg: 'Brand Already Exist', data:null})
        }
        else{
            var instance = new brandModel(req.body)
            var ans_insert = await instance.save();
            res.status(200).send({msg:"Brand Added",data:ans_insert})
        }
    }
    catch(err){
        console.log(err);
        res.status(403).send({msg:'Something went wrong', data:null})
    }
}

export {
    addUser,
    addCategory,
    addBrand
}
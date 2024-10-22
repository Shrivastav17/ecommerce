import categoryModel from "../models/category.model.js"

const addCategoryFunction = async(req,res) => {
    var {categoryname} = req.body
    var dataToInsert = {
        categoryname : categoryname
    }
    try{
        var categoryModelInstance = new categoryModel(dataToInsert)
        var ansAfterInsert = await categoryModelInstance.save()
        res.status(200).send({msg:'Category Inserted',data:ansAfterInsert})
    }
    catch(err){
        console.log(err);
        res.status(403).send({msg:err})
    }
    // res.send({msg:'Add Category Function Called'})
}

const showCategoryFunction = async(req,res) => {
    try{
        var ansAfterGet = await categoryModel.find()
        res.status(200).send({msg:'Category Shown',data:ansAfterGet})
    }
    catch(err){
        console.log(err);
        res.status(403).send({error:err})
    }
    //res.send({msg:'Show Category Function Called'})
}

const deleteCategoryFunction = async(req,res) => {
    try{
        var ansAfterDelete = await categoryModel.findByIdAndDelete(req.params.userid)
        res.status(200).send({msg:'Category Deleted',data:ansAfterDelete})
    }
    catch(err){
        console.log(err);
        res.status(403).send({error:err})
    }
    //res.send({msg:'Delete Category Function Called'})
}

const updateCategoryFunction = async(req,res) => {
    try{
        var ansAfterUpdate = await categoryModel.findByIdAndUpdate(req.params.userid,req.body)
        res.status(200).send({msg:'Category Updated',data:ansAfterUpdate})
    }
    catch(err){
        console.log(err);
        res.status(403).send({error:err})
    }
    //res.send({msg:'Update Category Function Called'})
}

export {
    addCategoryFunction,
    showCategoryFunction,
    deleteCategoryFunction,
    updateCategoryFunction
}
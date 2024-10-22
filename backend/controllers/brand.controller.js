import brandModel from "../models/brand.model.js"

const addBrandFunction = async(req,res) => { 
    var {brandname} = req.body
    var dataToInsert = {
        brandname : brandname
    }
    try{
        var brandModelInstance = new brandModel(dataToInsert)
        var ansAfterInsert = await brandModelInstance.save()
        res.status(200).send({msg:'Brand Inserted',data:ansAfterInsert})
    }
    catch(err){
        console.log(err);
        res.status(403).send({msg:err})
    }
    //res.send({msg:'Add Brand Function Called'})
}

const showBrandFunction = async(req,res) => {
    try{
        var ansAfterGet = await brandModel.find()
        res.status(200).send({msg:"Show Brand Data",data:ansAfterGet})
    }
    catch(err){
        console.log(err);
        res.status(403).send({error : err})
    }
    //res.send({msg:'Show Brand Function Called'})
}

const deleteBrandFunction = async(req,res) => {
    console.log(req.params);
    try{
        var ansAfterDelete = await brandModel.findByIdAndDelete(req.params.userid)
        res.status(200).send({msg:'Brand Deleted',data:ansAfterDelete})
    }
    catch(err){
        console.log(err);
        res.send({error:err})
    }
   //res.send({msg:'Delete Brand Function Called'})
}

const updateBrandFunction = async(req,res) => {
    console.log(req.params);
    try{
        var ansAfterUpdate = await brandModel.findByIdAndUpdate(req.params.userid,req.body)
        res.status(200).send({msg:'Brand Updated',data:ansAfterUpdate})
    }
    catch(err){
        console.log(err);
        res.send({error:err})
    }
    //res.send({msg:'Update Brand Function Called'})
}

export {
    addBrandFunction,
    showBrandFunction,
    deleteBrandFunction,
    updateBrandFunction
}
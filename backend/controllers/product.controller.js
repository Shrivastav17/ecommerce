import productModel from "../models/product.model.js";

const addProductFunction = async (req, res) => {
    var { productname, productprice, productdescription, categoryid,brandid, productimagepath } = req.body;
    var dataToInsert = {
        productname: productname,
        productprice: productprice,
        productdescription: productdescription,
        categoryid: categoryid,
        brandid: brandid,
        productimagepath: productimagepath
    }
    try {
        var productModelInterface = new productModel(dataToInsert)
        var ansAfterInsert = await productModelInterface.save()
        res.status(200).send({ msg: 'Product Inserted', data: ansAfterInsert })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ error: err })
    }
    //res.send({msg:'Add Product Function Called'})
}

const showProductFunction = async (req, res) => {
    try {
        var ansAfterGet = await productModel.find()
        res.status(200).send({ msg: 'Product Shown', data: ansAfterGet })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ error: err })
    }
    //res.send({ msg: 'Show Product Function Called' })
}

const deleteProductFunction = async (req, res) => {
    console.log(req.params)
    try {
        var ansAfterDelete = await productModel.findByIdAndDelete(req.params.userid)
        res.status(200).send({ msg: 'Product Deleted', data: ansAfterDelete })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ error: err })
    }
    //res.send({ msg: 'Delete Product Function Called' })
}

const updateProductFunction = async (req, res) => {
    try {
        var ansAfterUpdate = await productModel.findByIdAndUpdate(req.params.userid, req.body)
        res.status(200).send({ msg: 'Product Updated', data: ansAfterUpdate })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ error: err })
    }
    //res.send({ msg: 'Update Product Function Called' })
}

const showCatwiseProduct = async (req, res) => {
    console.log(req.params)
    try {
        var ansAfterGet = await productModel.find({categoryid:req.params.categoryid})
        res.status(200).send({ msg: 'Product Shown catwise', data: ansAfterGet })
    }
    catch (err) {  
        console.log(err);
        res.status(403).send({ error: err })
    }
    //res.send({ msg: 'Show Catwise product Function Called' })
}

const showBrwiseProduct = async(req, res) => {
    console.log(req.params);
    try{
        var ansAfterGet = await productModel.find({brandid:req.params.brandid})
        res.status(200).send({msg:'Product Shown Brwise',data:ansAfterGet})
    }
    catch (err) {  
        console.log(err);
        res.status(403).send({ error: err })
    }
    //res.send({ msg: 'Show Brwise product Function Called' })
}

export {
    addProductFunction,
    showProductFunction,
    deleteProductFunction,
    updateProductFunction,
    showCatwiseProduct,
    showBrwiseProduct
}
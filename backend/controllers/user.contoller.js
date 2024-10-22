import sendEmail from "../middlewares/email.middleware.js";
import { encryptdata ,comparedata} from "../middlewares/encrypt.middleware.js";
import { validateName,validateEmail,validateMobile,validatePassword,comparePassword } from "../middlewares/validator.middleware.js"
import userModel from "../models/user.model.js";

const registerAction = async(req,res) => {
    console.log(req.body)
    // return;
    //res.send('register function called')
    var {username,useremail,usermobile,userpass,usercpass} = req.body;

    if(!validateName(username)){
        res.send({msg:'Invalid Name'})
    }
    else if(!validateEmail(useremail)){
        res.send({msg:'Invalid Email'})
    }
    else if(!validateMobile(usermobile)){
        res.send({msg:'Invalid Mobile number'})
    }
    else if(!validatePassword(userpass)){
        res.send({msg:'Password Must Have all Types of Characters'})
    }
    else if(!comparePassword(userpass,usercpass)){
        res.send({msg:"Passwords don't match"})
    }
    else{
        var userpass = encryptdata(userpass)
        console.log(userpass);

        var dataToInsert = {
            username:username,  
            useremail:useremail,
            usermobile:usermobile,
            userpass:userpass
        }

        try{

            var ans_email = await userModel.find({useremail:useremail});

            // console.log(ans_email);
            // return;

            if(ans_email.length > 0){
                res.send({msg:"Email Id Exist"})
            }
            else{

                var userModelInstance = new userModel(dataToInsert)
                var ansAfterInsert = await userModelInstance.save()

                sendEmail(useremail,"NODE TASK","Email Received")
                .then(responseFromEmail=>{res.status(200).send({msg:'User Registered',data:ansAfterInsert})})
                .catch(err=>{
                    console.log(err)
                })

            }
        }
        catch(err){
            console.log(err);
            res.status(403).send({error:err})
        }
    }
}

const loginAction = async (req,res) => {
    var {useremail,userpass} = req.body;
    if(!validateEmail(useremail)){
        res.send({msg:'Invalid Email'})
    }
    else if(!validatePassword(userpass)){
        res.send({msg:'Password Must Have all Types of Characters'})
    }
    else{
        
        var ans_email = await userModel.find({useremail:useremail});
        console.log(ans_email);
        if(ans_email.length > 0){
            if( comparedata(ans_email[0]['userpass'] , userpass) ){
                res.send({msg:'Succes'})
            }
            else{
                res.send({msg:'Passwords do not match'})
            }
        }
        else{
            res.send({msg:'EMailid not found'})
        }
    }
}

const updateProfile = async(req,res) => {
    try{
        var ansAfterUpdate = await userModel.findByIdAndUpdate(req.params.userid,req.body)
        res.status(200).send({msg:'Data Updated',data:ansAfterUpdate})
    }
    catch (err) {
        console.log(err)
        res.status(403).send({ error: err })
    }
    //res.send('updateProfile function called')
}

const updatePassword = (req,res) => {
    res.send('updatePassword function called')
}

const alluserAction = async(req,res) => {
        try {
            var ansFormDB = await userModel.find()
            //console.log(ansFormDB);
            res.status(200).send({ data: ansFormDB })
        }
        catch (err) {
            console.log(err)
            res.status(403).send({ error: err })
    }
    //res.send('all user function called')
}

const deleteuserAction = async(req,res) => {
    console.log(req.params)
    try{
        var ansAfterDelete = await userModel.findByIdAndDelete(req.params.userid)
        res.status(200).send({msg:'data deleted',data:ansAfterDelete})
    }
    catch(err){
        console.log(err);
        res.status(403).send({error:err})
    }
    //res.send('delete user function called')
}
export {
    registerAction,
    loginAction,
    updateProfile,
    updatePassword,
    alluserAction,
    deleteuserAction
}
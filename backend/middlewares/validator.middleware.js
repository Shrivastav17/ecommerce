import validator from "validator";

const validateName = (textName) => {
    return (validator.isEmpty(textName) || !validator.isLength(textName,{min:2,max:20}))?false:true
}

const validateEmail = (textEmail) => {
    return (validator.isEmpty(textEmail) || !validator.isEmail(textEmail))?false:true
}
const validateMobile = (textMobile) => {
    return (validator.isEmpty(textMobile) || !validator.isMobilePhone(textMobile,["en-IN"]))?false:true
}

const validatePassword = (textPassword) => {
    return (validator.isEmpty(textPassword) || !validator.isStrongPassword(textPassword,{minLength:4,minNumbers:1,minLowercase:1,minSymbols:1,minUppercase:1})) || !validator.isLength(textPassword,{min:4,max:12})?false:true
}

const comparePassword = (textPassword,textCPassword) => {
    return (validator.equals(textPassword,textCPassword))?true:false
}
export{
    validateName,
    validateEmail,
    validateMobile,
    validatePassword,
    comparePassword
}
import express from 'express';
import{ registerAction,loginAction,updateProfile,updatePassword,alluserAction,deleteuserAction } from '../controllers/user.contoller.js'

const userRouter = express.Router()

userRouter.post('/register',registerAction)

userRouter.post('/login',loginAction)

userRouter.put('/updateprofile/:userid',updateProfile)

userRouter.put('/updatepassword',updatePassword)

userRouter.get('/alluser',alluserAction)

userRouter.delete('/deleteuser/:userid',deleteuserAction)

export default userRouter;
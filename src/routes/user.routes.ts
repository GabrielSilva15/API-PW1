import { Router } from "express";
import { findAllUsersController } from "../useCases/findAllUsers"; 
import { createUsersController } from "../useCases/createUser"; 
import { findUserController } from "../useCases/findUser"; 
import { updateUsersController } from "../useCases/updateUser";
import { deleteUserController } from "../useCases/deleteUser"; 
import { saveImageUserController } from "../useCases/saveImageUser"; 
import { changePasswordUserController } from "../useCases/changePasswordUser";
import { findByIdUserImageController } from "../useCases/findByIdUserImage";
import AuthMid from "../middlewares/authMid";
import upload from "../utils/multer";

const router = Router();
// GET
router.get('/users',(request,response)=>findAllUsersController.handle(request,response));
router.get('/user/:id',(request,response)=>findUserController.handle(request,response));
router.get('/user-image/:id',AuthMid.handle,(request,response)=>findByIdUserImageController.handle(request,response));


//POST
router.post('/user/create',(request,response)=>createUsersController.handle(request,response));

//PUT
router.put('/user/update',AuthMid.handle,(request,response)=>updateUsersController.handle(request,response));

//PATCH
router.patch('/user/upload-image',AuthMid.handle,upload.single("image"),(request,response)=>saveImageUserController.handle(request,response));
router.patch('/user/change-password',AuthMid.handle,(request,response)=>changePasswordUserController.handle(request,response));

//Delete
router.delete('/user/delete',AuthMid.handle,(request,response)=>deleteUserController.handle(request,response));


export default router;

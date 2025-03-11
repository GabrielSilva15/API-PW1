import { Router } from "express";
import { findAllFornecedoresController } from "../useCase/findAllFornecedores";
import { createFornecedorController } from "../useCase/createFornecedor";
import { findByIdFornecedorController } from "../useCase/findByIdFornecedor";
import { updateFornecedorController } from "../useCase/updateFornecedor";
import { deleteFornecedorController } from "../useCase/deleteFornecedor";
import { saveImageFornecedorController } from "../useCase/saveImageFornecedor";
import AuthMid from "../middlewares/authMid";
import upload from "../utils/multer";


const router = Router();

router.get('/fornecedores/',AuthMid.handle,(request,response)=>findAllFornecedoresController.handle(request,response));

router.get('/fornecedores/:id',AuthMid.handle,(request,response)=>findByIdFornecedorController.handle(request,response));

router.post('/fornecedores',AuthMid.handle,(request,response)=>createFornecedorController.handle(request,response));

router.put('/fornecedor/:id',AuthMid.handle,(request,response)=>updateFornecedorController.handle(request,response));
//Falta AUth mid

router.patch('/fornecedor/upload-image/:id',AuthMid.handle,upload.single("image"),(request,response)=>saveImageFornecedorController.handle(request,response));

router.delete('/fornecedor/:id',AuthMid.handle,(request,response)=>deleteFornecedorController.handle(request,response))
//Falta AUth mid


export default router;
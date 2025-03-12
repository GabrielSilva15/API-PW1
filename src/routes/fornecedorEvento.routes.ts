import { Router } from "express";

import { findAllFornecedoresEventoController } from "../useCases/findAllFornecedorEvento"; 
import { createFornecedorEventoController } from "../useCases/createFornecedorEvento"; 
import { deleteFornecedorEventoController } from "../useCases/deleteFornecedorEvento"; 
import { findAllFornecedorEventosController } from "../useCases/findAllFornecedorEventos"; 
import AuthMid from "../middlewares/authMid";

const router = Router();


router.get('/fornecedores-evento/:eventId',AuthMid.handle,(request,response)=>findAllFornecedoresEventoController.handle(request,response));
router.get('/fornecedor-evento/:fornecedorId',AuthMid.handle,(request,response)=>findAllFornecedorEventosController.handle(request,response));

router.post('/fornecedores-evento',AuthMid.handle,(request,response)=>createFornecedorEventoController.handle(request,response));

router.delete('/fornecedores-evento',AuthMid.handle,(request,response)=>deleteFornecedorEventoController.handle(request,response));


export default router;
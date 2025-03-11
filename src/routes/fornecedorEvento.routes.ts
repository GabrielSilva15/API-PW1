import { Router } from "express";

import { findAllFornecedoresEventoController } from "../useCase/findAllFornecedorEvento"; 
import { createFornecedorEventoController } from "../useCase/createFornecedorEvento";
import { deleteFornecedorEventoController } from "../useCase/deleteFornecedorEvento";
import { findAllFornecedorEventosController } from "../useCase/findAllFornecedorEventos";
import AuthMid from "../middlewares/authMid";

const router = Router();


router.get('/fornecedores-evento/:eventId',AuthMid.handle,(request,response)=>findAllFornecedoresEventoController.handle(request,response));
router.get('/fornecedor-evento/:fornecedorId',AuthMid.handle,(request,response)=>findAllFornecedorEventosController.handle(request,response));

router.post('/fornecedores-evento',AuthMid.handle,(request,response)=>createFornecedorEventoController.handle(request,response));

router.delete('/fornecedores-evento',AuthMid.handle,(request,response)=>deleteFornecedorEventoController.handle(request,response));


export default router;
import { Router } from "express";
import { createConvidadoController } from "../useCase/createConvidado"; 
import { deleteConvidadoController } from "../useCase/deleteConvidado";
import { findConvidadosEventoController } from "../useCase/findConvidadosEvento";
import { findByConvidadoEventoController } from "../useCase/findByConvidadoEvento";
import { confirmaPresencaConvidadoController } from "../useCase/confirmaPresencaConvidado";
import { findAllEventosConvidadoController } from "../useCase/findAllEventosConvidado";
import AuthMid from "../middlewares/authMid";

const router = Router();

router.get('/convidados/:eventId',AuthMid.handle,(request,response)=>findConvidadosEventoController.handle(request,response));
router.get('/convidado',AuthMid.handle,(request,response)=>findByConvidadoEventoController.handle(request,response));
router.get('/convidado/eventos',AuthMid.handle,(request,response)=>findAllEventosConvidadoController.handle(request,response));


router.post('/convidado',AuthMid.handle,(request,response)=>createConvidadoController.handle(request,response));

router.patch('/convidado/confirma-presenca', AuthMid.handle,(request,response)=>confirmaPresencaConvidadoController.handle(request,response));

router.delete('/convidado',AuthMid.handle,(request,response)=>deleteConvidadoController.handle(request,response));


export default router;
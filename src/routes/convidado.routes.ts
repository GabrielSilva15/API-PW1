import { Router } from "express";
import { createConvidadoController } from "../useCases/createConvidado"; 
import { deleteConvidadoController } from "../useCases/deleteConvidado"; 
import { findConvidadosEventoController } from "../useCases/findConvidadosEvento"; 
import { findByConvidadoEventoController } from "../useCases/findByConvidadoEvento"; 
import { confirmaPresencaConvidadoController } from "../useCases/confirmaPresencaConvidado"; 
import { findAllEventosConvidadoController } from "../useCases/findAllEventosConvidado"; 
import AuthMid from "../middlewares/authMid";

const router = Router();

router.get('/convidados/:eventId',AuthMid.handle,(request,response)=>findConvidadosEventoController.handle(request,response));
router.get('/convidado',AuthMid.handle,(request,response)=>findByConvidadoEventoController.handle(request,response));
router.get('/convidado/eventos',AuthMid.handle,(request,response)=>findAllEventosConvidadoController.handle(request,response));


router.post('/convidado',AuthMid.handle,(request,response)=>createConvidadoController.handle(request,response));

router.patch('/convidado/confirma-presenca', AuthMid.handle,(request,response)=>confirmaPresencaConvidadoController.handle(request,response));

router.delete('/convidado',AuthMid.handle,(request,response)=>deleteConvidadoController.handle(request,response));


export default router;
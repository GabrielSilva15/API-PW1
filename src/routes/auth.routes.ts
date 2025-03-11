import { authentication } from "../useCases/authenticateUser"; 
import { Router } from "express";

const router = Router();

router.post('/user/login',(request,response)=>authentication.handle(request,response));

export default router;
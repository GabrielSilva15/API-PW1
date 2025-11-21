import authMid from "../middlewares/authMid/index.js";
import { authentication } from "../useCases/authenticateUser";
import { Router } from "express";

const router = Router();

router.get("/auth/check", authMid.handle, (req, res) => { res.status(200).json({ status: "verified", request: req.userId }) });
router.post('/auth/login', (request, response) => authentication.handle(request, response));

export default router;
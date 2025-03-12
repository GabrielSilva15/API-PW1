import { Router } from "express";
import { findByIdEventController } from "../useCase/findByIdEvent";
import { deleteEventController } from "../useCase/deleteEvent";
import { findAllEventsByUserIdController } from "../useCase/findAllEventsByUserId";
import { createEventController } from "../useCase/createEvent";
import { updateEventController } from "../useCase/updateEvent";
import { saveImageEventController } from "../useCase/saveImageEvent";
import AuthMid from "../middlewares/authMid";
import upload from "../utils/multer";

const router = Router();

//Post
router.post('/event',AuthMid.handle,(request,response)=>createEventController.handle(request,response));

//Get
router.get('/event/:id',AuthMid.handle,(request,response)=>findByIdEventController.handle(request,response));
router.get('/event',AuthMid.handle,(request,response)=>findAllEventsByUserIdController.handle(request,response));

//PUT
router.put('/event/:id',AuthMid.handle,(request,response)=>updateEventController.handle(request,response));

//patch
router.patch('/event/upload-image/:id',AuthMid.handle,upload.single("image"),(request,response)=>saveImageEventController.handle(request,response))

//Delete
router.delete('/event/:id',AuthMid.handle,(request,response)=>deleteEventController.handle(request,response));


export default router;
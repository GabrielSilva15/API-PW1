import { DeleteConvidadoController } from "./deleteConvidadoController";
import { DeleteConvidadoUseCase } from "./deleteConvidadoUseCase";
import { ConvidadoRepository } from "../../repositories/implementations/ConvidadoRepository";
import { EventRepository } from "../../repositories/implementations/EventRepository"; 
import { UserRepository } from "../../repositories/implementations/UserRepository"; 

const userRepository  = new UserRepository();
const eventRepository = new EventRepository();

const convidadoRepository = new ConvidadoRepository();
const deleteConvidadoUseCase = new DeleteConvidadoUseCase(convidadoRepository,userRepository,eventRepository);
const deleteConvidadoController = new DeleteConvidadoController(deleteConvidadoUseCase);

export {deleteConvidadoUseCase,deleteConvidadoController};
import { CreateConvidadoController } from "./createConvidadoController";
import { CreateConvidadoUseCase } from "./createConvidadoUseCase";
import { ConvidadoRepository } from "../../repositories/implementations/ConvidadoRepository";
import { EventRepository } from "../../repositories/implementations/EventRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const eventRepository =  new EventRepository();
const userRepository = new UserRepository();

const convidadoRepository = new ConvidadoRepository();
const createConvidadoUseCase = new CreateConvidadoUseCase(convidadoRepository,eventRepository,userRepository);
const createConvidadoController = new CreateConvidadoController(createConvidadoUseCase);

export {createConvidadoUseCase,createConvidadoController};
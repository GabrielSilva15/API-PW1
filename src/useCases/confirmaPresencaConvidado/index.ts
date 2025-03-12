import { EventRepository } from "../../repositories/implementations/EventRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ConvidadoRepository } from "../../repositories/implementations/ConvidadoRepository";

import { ConfirmaPresencaConvidadoController } from "./confirmaPresencaConvidadoController";
import { ConfirmaPresencaConvidadoUseCase } from "./confirmaPresencaConvidadoUseCase";

const eventRepository =  new EventRepository();
const userRepository = new UserRepository();

const convidadoRepository = new ConvidadoRepository();
const confirmaPresencaConvidadoUseCase = new ConfirmaPresencaConvidadoUseCase(convidadoRepository,eventRepository,userRepository);
const confirmaPresencaConvidadoController = new ConfirmaPresencaConvidadoController(confirmaPresencaConvidadoUseCase);

export {confirmaPresencaConvidadoUseCase,confirmaPresencaConvidadoController};

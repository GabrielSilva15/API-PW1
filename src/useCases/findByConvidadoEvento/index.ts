import { ConvidadoRepository } from "../../repositories/implementations/ConvidadoRepository"
import { EventRepository } from "../../repositories/implementations/EventRepository" 
import { UserRepository } from "../../repositories/implementations/UserRepository" 

import { FindByConvidadoEventoUseCase } from "./findByConvidadoEventoUseCase"
import { FindByConvidadoEventoController } from "./findByConvidadoEventoController"

const userRepository = new UserRepository();
const eventRepository = new EventRepository();

const convidadoRepository = new ConvidadoRepository();
const findByConvidadoEventoUseCase = new FindByConvidadoEventoUseCase(convidadoRepository,userRepository,eventRepository);
const findByConvidadoEventoController = new FindByConvidadoEventoController(findByConvidadoEventoUseCase);

export {findByConvidadoEventoUseCase,findByConvidadoEventoController};
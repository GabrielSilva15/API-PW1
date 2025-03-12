import { FindConvidadosEventoUseCase } from "./findConvidadosEventoUseCase"; 
import { FindConvidadosEventoController } from "./findConvidadosEventoController"; 
import { ConvidadoRepository } from "../../repositories/implementations/ConvidadoRepository";
import { EventRepository } from "../../repositories/implementations/EventRepository";

const eventRepository = new EventRepository();
const convidadoRepository = new ConvidadoRepository();
const findConvidadosEventoUseCase = new FindConvidadosEventoUseCase(convidadoRepository,eventRepository);
const findConvidadosEventoController = new FindConvidadosEventoController(findConvidadosEventoUseCase);

export {findConvidadosEventoUseCase,findConvidadosEventoController};

import { FindAllFornecedoresEventoController } from "./findAllFornecedoresEventoController";
import { FindAllFornecedoresEventoUseCase } from "./findAllFornecedoresEventoUseCase";
import { FornecedorEventoRepository } from "../../repositories/implementations/FornecedorEventoRepository";
import { EventRepository } from "../../repositories/implementations/EventRepository"; 

const eventRepository = new EventRepository();
const fornecedorEventoRepository = new FornecedorEventoRepository();
const findAllFornecedoresEventoUseCase = new FindAllFornecedoresEventoUseCase(fornecedorEventoRepository,eventRepository);
const findAllFornecedoresEventoController = new FindAllFornecedoresEventoController(findAllFornecedoresEventoUseCase);

export {findAllFornecedoresEventoUseCase,findAllFornecedoresEventoController};

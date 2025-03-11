import { DeleteFornecedorEventoUseCase } from "./deleteFornecedorEventoUseCase";
import { DeleteFornecedorEventoController } from "./deleteFornecedorEventoController";
import { FornecedorEventoRepository } from "../../repositories/implementations/FornecedorEventoRepository";
import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository"; 
import { EventRepository } from "../../repositories/implementations/EventRepository";  

const eventRepository = new EventRepository();
const fornecedorRepository = new FornecedorRepository(); 

const fornecedorEventoRepository = new FornecedorEventoRepository();
const deleteFornecedorEventoUseCase = new DeleteFornecedorEventoUseCase(fornecedorEventoRepository,fornecedorRepository,eventRepository);
const deleteFornecedorEventoController = new DeleteFornecedorEventoController(deleteFornecedorEventoUseCase);

export {deleteFornecedorEventoUseCase,deleteFornecedorEventoController};
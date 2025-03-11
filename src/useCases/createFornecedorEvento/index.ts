import { CreateFornecedorEventoUseCase } from "./createFornecedorEventoUseCase";
import { CreateFornecedorEventoController } from "./createFornecedorEventoController";
import { FornecedorEventoRepository } from "../../repositories/implementations/FornecedorEventoRepository";
import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository";
import { EventRepository } from "../../repositories/implementations/EventRepository";

const eventRepository = new EventRepository();
const fornecedorRepository = new FornecedorRepository(); 

const fornecedorEventoRepository = new FornecedorEventoRepository();
const createFornecedorEventoUseCase = new CreateFornecedorEventoUseCase(fornecedorEventoRepository,fornecedorRepository,eventRepository);
const createFornecedorEventoController = new CreateFornecedorEventoController(createFornecedorEventoUseCase);

export {createFornecedorEventoUseCase,createFornecedorEventoController};
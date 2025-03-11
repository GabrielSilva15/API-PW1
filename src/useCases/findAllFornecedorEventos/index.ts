import { FindAllFornecedorEventosUseCase } from "./findAllFornecedorEventosUseCase";
import { FindAllFornecedorEventosController } from "./findAllFornecedorEventosController";
import { FornecedorEventoRepository } from "../../repositories/implementations/FornecedorEventoRepository";
import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository"; 

const fornecedorRepository = new FornecedorRepository();
const fornecedorEventoRepository = new FornecedorEventoRepository();
const findAllFornecedorEventosUseCase = new FindAllFornecedorEventosUseCase(fornecedorEventoRepository,fornecedorRepository);
const findAllFornecedorEventosController =new FindAllFornecedorEventosController(findAllFornecedorEventosUseCase);

export {findAllFornecedorEventosUseCase,findAllFornecedorEventosController};
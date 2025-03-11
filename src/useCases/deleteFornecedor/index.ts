import { DeleteFornecedorUseCase } from "./deleteFornecedorUseCase";
import { DeleteFornecedorController } from "./deleteFornecedorController";
import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository";
import { FornecedorEventoRepository } from "../../repositories/implementations/FornecedorEventoRepository";

const fornecedorEventoRepository = new FornecedorEventoRepository();

const fornecedorRepository = new FornecedorRepository();
const deleteFornecedorUseCase = new DeleteFornecedorUseCase(fornecedorRepository,fornecedorEventoRepository);
const deleteFornecedorController = new DeleteFornecedorController(deleteFornecedorUseCase);

export {deleteFornecedorUseCase,deleteFornecedorController};

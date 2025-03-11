import { FindByIdFornecedorUseCase } from "./findByIdFornecedorUseCase";
import { FindByIdFornecedorController } from "./findByIdFornecedorController";
import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository";

const fornecedorRepository= new FornecedorRepository();
const findByIdFornecedorUseCase = new FindByIdFornecedorUseCase(fornecedorRepository);
const findByIdFornecedorController = new FindByIdFornecedorController(findByIdFornecedorUseCase);

export {findByIdFornecedorUseCase,findByIdFornecedorController};
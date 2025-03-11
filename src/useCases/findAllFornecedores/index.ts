import { FindAllFornecedoresUseCase } from "./findAllFornecedoresUseCase";
import { FindAllFornecedoresController } from "./findAllFornecedoresController";
import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository";

const fornecedorRepository = new FornecedorRepository();
const findAllFornecedoresUseCase = new FindAllFornecedoresUseCase(fornecedorRepository);
const findAllFornecedoresController = new FindAllFornecedoresController(findAllFornecedoresUseCase);

export { findAllFornecedoresUseCase, findAllFornecedoresController};
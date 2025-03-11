import { CreateFornecedorUseCase } from "./createFornecedorUseCase";
import { CreateFornecedorController } from "./createFornecedorController";
import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const fornecedorRepository = new FornecedorRepository();
const createFornecedorUseCase = new CreateFornecedorUseCase(fornecedorRepository,userRepository);
const createFornecedorController = new CreateFornecedorController(createFornecedorUseCase);

export {createFornecedorUseCase,createFornecedorController};



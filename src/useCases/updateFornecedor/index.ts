import { UpdateFornecedorUseCase } from "./updateFornecedorUseCase";
import { UpdateFornecedorController } from "./updateFornecedorController";
import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const fornecedorRepository = new FornecedorRepository();
const updateFornecedorUseCase = new UpdateFornecedorUseCase(fornecedorRepository,userRepository);
const updateFornecedorController = new UpdateFornecedorController(updateFornecedorUseCase);

export {updateFornecedorUseCase,updateFornecedorController};
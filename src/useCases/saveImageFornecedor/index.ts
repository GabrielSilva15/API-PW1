import { FornecedorRepository } from "../../repositories/implementations/FornecedorRepository"; 
import { SaveImageFornecedorUseCase } from "./saveImageFornecedorUseCase"; 
import { SaveImageFornecedorController } from "./saveImageFornecedorController"; 

const fornecedorRepository = new FornecedorRepository();
const saveImageFornecedorUseCase = new SaveImageFornecedorUseCase(fornecedorRepository);
const saveImageFornecedorController= new SaveImageFornecedorController(saveImageFornecedorUseCase);
 
export {saveImageFornecedorUseCase,saveImageFornecedorController};
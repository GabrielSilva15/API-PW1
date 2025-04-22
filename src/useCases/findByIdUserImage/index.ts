import { FindByIdUserImageUseCase } from "./findByIdUserImageUseCase";
import { FindByIdUserImageController } from "./findByIdUserImageController";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const findByIdUserImageUseCase = new FindByIdUserImageUseCase(userRepository);
const findByIdUserImageController = new FindByIdUserImageController(findByIdUserImageUseCase);

export {findByIdUserImageUseCase,findByIdUserImageController};
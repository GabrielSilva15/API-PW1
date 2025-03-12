import { FindAllEventosConvidadoUseCase } from "./findAllEventosConvidadoUseCase";
import { FindAllEventosConvidadoController } from "./findAllEventosConvidadoController";
import { ConvidadoRepository } from "../../repositories/implementations/ConvidadoRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";


const userRepository = new UserRepository();
const convidadoRepository = new ConvidadoRepository();
const findAllEventosConvidadoUseCase = new FindAllEventosConvidadoUseCase(convidadoRepository,userRepository);
const findAllEventosConvidadoController = new FindAllEventosConvidadoController(findAllEventosConvidadoUseCase);

export {findAllEventosConvidadoUseCase,findAllEventosConvidadoController};
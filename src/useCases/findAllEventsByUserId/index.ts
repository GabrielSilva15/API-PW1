import { FindAllEventsByUserIdUseCase } from "./findAllEventsByUserIdUseCase";
import { FindAllEventsByUserIdController } from "./findAllEventsByUserIdController";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { EventRepository } from "../../repositories/implementations/EventRepository";

const userRepository = new UserRepository();
const eventRepository = new EventRepository();
const findAllEventsByUserIdUseCase = new FindAllEventsByUserIdUseCase(eventRepository,userRepository);
const findAllEventsByUserIdController = new FindAllEventsByUserIdController(findAllEventsByUserIdUseCase);

export {findAllEventsByUserIdUseCase,findAllEventsByUserIdController};



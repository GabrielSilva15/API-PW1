import { UpdateEventController } from "./updateEventController";
import { UpdateEventUseCase } from "./updateEventUseCase";
import { EventRepository } from "../../repositories/implementations/EventRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
const userRepository = new UserRepository();
const eventRepository = new EventRepository();
const updateEventUseCase = new UpdateEventUseCase(eventRepository,userRepository);
const updateEventController = new UpdateEventController(updateEventUseCase);

export {updateEventUseCase,updateEventController};
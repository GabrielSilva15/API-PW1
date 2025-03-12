import { CreateEventUseCase } from "./createEventUseCase";
import { CreateEventController } from "./createEventController";
import { EventRepository } from "../../repositories/implementations/EventRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();

const eventRepository = new EventRepository();
const createEventUseCase = new CreateEventUseCase(eventRepository,userRepository);
const createEventController = new CreateEventController(createEventUseCase);

export {createEventUseCase,createEventController};
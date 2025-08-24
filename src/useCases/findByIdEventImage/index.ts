import { FindByIdEventImageUseCase } from "./findByIdEventImageUseCase.js";
import { FindByIdEventImageController } from "./findByIdEventImageController.js";
import { EventRepository } from "../../repositories/implementations/EventRepository.js";

const eventRepository = new EventRepository();
const findByIdEventImageUseCase = new FindByIdEventImageUseCase(eventRepository);
const findByIdEventImageController = new FindByIdEventImageController(findByIdEventImageUseCase);

export {findByIdEventImageUseCase,findByIdEventImageController};

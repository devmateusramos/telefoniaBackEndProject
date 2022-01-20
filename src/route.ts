import { Router } from 'express';

import { CreateCallController } from './useCases/createCall/CreateCallController';
import { ValueCallController } from './useCases/valueCall/ValueCallController';

const routes = Router();

const createCallController = new CreateCallController();

const valueCallController = new ValueCallController();

routes.post('/call', createCallController.handle);

routes.get('/call', valueCallController.handle);

export { routes };

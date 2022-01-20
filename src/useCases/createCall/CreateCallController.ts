import { Request, Response } from 'express';

import { CreateCallService } from './CreateCallService';

export class CreateCallController {
  async handle(request: Request, response: Response) {
    const { origin, destiny, minutes } = request.body;

    const createCallService = new CreateCallService();

    await createCallService.execute({ origin, destiny, minutes });

    return response.status(201).send();
  }
}

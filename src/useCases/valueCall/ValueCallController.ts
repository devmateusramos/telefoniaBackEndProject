import { Request, Response } from 'express';

import { ValueCallService } from './ValueCallService';

export class ValueCallController {
  async handle(request: Request, response: Response) {
    const valueCallService = new ValueCallService();
    const value = await valueCallService.execute();

    return response.status(200).json(value);
  }
}

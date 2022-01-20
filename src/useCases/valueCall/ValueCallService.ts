import { getRepository } from 'typeorm';

import { Calls } from '../../entities/Calls';

export class ValueCallService {
  async execute() {
    const calls = getRepository(Calls);

    const value = await calls.find();

    return value;
  }
}

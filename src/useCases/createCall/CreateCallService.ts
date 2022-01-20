import { getRepository } from 'typeorm';

import { Calls } from '../../entities/Calls';

interface ICallRequest {
  origin: number;
  destiny: number;
  minutes: number;
}

export class CreateCallService {
  async execute({ origin, destiny, minutes }: ICallRequest): Promise<void> {
    const repo = getRepository(Calls);
    const information = {
      origin,
      destiny,
      minutes,
      plan0: 0,
      plan30: 0,
      plan60: 0,
      plan120: 0,
    };
    function plan30(value: number) {
      const taxes = value * 1.1;
      let total = minutes - 30;
      if (total > 0) {
        total *= taxes;
        return total;
      }
      return 0;
    }
    function plan60(value: number) {
      const taxes = value * 1.1;
      let total = minutes - 60;
      if (total > 0) {
        total *= taxes;
        return total;
      }
      return 0;
    }
    function plan120(value: number) {
      const taxes = value * 1.1;
      let total = minutes - 120;
      if (total > 0) {
        total *= taxes;
        return total;
      }
      return 0;
    }
    if (origin === 11 && destiny === 16) {
      const value = 1.9;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else if (origin === 16 && destiny === 11) {
      const value = 2.9;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else if (origin === 11 && destiny === 17) {
      const value = 1.7;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else if (origin === 17 && destiny === 11) {
      const value = 2.7;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else if (origin === 11 && destiny === 18) {
      const value = 0.9;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else {
      const value = 1.9;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    }
    console.log(information);
    await repo.delete({});

    const call = repo.create(information);

    await repo.save(call);
  }
}

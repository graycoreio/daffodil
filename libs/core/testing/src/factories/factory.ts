import {
  range,
  ArglessConstructable,
} from '@daffodil/core';

import { IDaffModelFactory } from './factory.interface';

export abstract class DaffModelFactory<T extends Record<string, any>> implements IDaffModelFactory<T> {
  constructor(public type: ArglessConstructable<T>){}

  create(partial: Partial<T> = {}): T {
    return {
      ...new this.type(),
      ...partial,
    };
  }

  createMany(qty = 1, partial: Partial<T> = {}): T[] {
    return range(0, qty - 1).map(() => this.create(partial));
  }
}

import { range } from '@daffodil/core';

import { IDaffModelFactory } from './factory.interface';

type ArglessConstructable<T> = new()  => T;


export abstract class DaffModelFactory<T extends Record<string, any>> implements IDaffModelFactory<T> {
  constructor(public type: ArglessConstructable<T>){

  }

  create(partial = {}): T {
    return {
      ...<any>new this.type(), // TODO: remove in TS 3.3
      ...partial,
    };
  }

  createMany(qty = 1, partial = {}): T[] {
    return range(0, qty - 1).map(() => this.create(partial));
  }
}

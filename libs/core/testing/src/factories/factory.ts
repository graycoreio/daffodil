import {
  range,
  Constructable,
} from '@daffodil/core';

import { IDaffModelFactory } from './factory.interface';

/**
 * The base class for model factories.
 *
 * The mock class is passed as the first constructor arg
 * and any additional args are passed to the mock class constructor.
 *
 * The following example demonstrates using this feature to inject
 * a different factory into a mock class.
 *
 * ```ts
 * class MyMockModel {
 *  constructor(
 *    private otherFactory: MyOtherFactory
 *  ) {}
 *
 *  private createOtherModel() {
 *    return this.otherFactory.create()
 *  }
 *
 *  otherModel = this.createOtherModel()
 * }
 *
 * @Injectable()
 * class TestFactory extends DaffModelFactory<MyMockModel> {
 *  constructor(
 *    otherFactory: MyOtherFactory
 *  ) {
 *    super(MyMockModel, otherFactory)
 *  }
 * }
 * ```
 */
export abstract class DaffModelFactory<T extends Record<string, any>> implements IDaffModelFactory<T> {
  _instantiationArgs: ConstructorParameters<Constructable<T>>;

  constructor(
    public type: Constructable<T>,
    ...args: ConstructorParameters<Constructable<T>>
  ) {
    this._instantiationArgs = args;
  }

  create(partial: Partial<T> = {}): T {
    // use Object.assign to preserve the object's class
    return Object.assign(new this.type(...this._instantiationArgs), partial);
  }

  createMany(qty = 1, partial = {}): T[] {
    return range(0, qty - 1).map(() => this.create(partial));
  }
}

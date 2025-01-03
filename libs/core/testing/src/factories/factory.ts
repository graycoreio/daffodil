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
 * The constructor args can be omitted if the `create` method is overridden.
 *
 * @example Injecting a different factory into a mock class
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
export abstract class DaffModelFactory<T extends Record<string, any>, Klass extends Constructable<T> = Constructable<T>> implements IDaffModelFactory<T> {
  _instantiationArgs: ConstructorParameters<Klass>;

  constructor(
    public type?: Klass,
    ...args: ConstructorParameters<Klass>
  ) {
    this._instantiationArgs = args;
  }

  create(partial: Partial<T> = {}): T {
    if (!this.type) {
      throw new Error('`type` is required if `create` is not overriden.');
    }
    return {
      ...new this.type(...this._instantiationArgs),
      ...partial,
    };
  }

  createMany(qty = 1, partial: Partial<T> = {}): T[] {
    return range(0, qty - 1).map(() => this.create(partial));
  }
}

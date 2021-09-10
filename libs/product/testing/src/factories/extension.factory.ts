import {
  Injectable,
  Inject,
} from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

import { DAFF_PRODUCT_EXTRA_FACTORIES } from '../injection-tokens/public_api';
import { MockProduct } from './default-product.factory';
import { DaffProductKindFactory } from './kind.factory';

/**
 * Factory for creating DaffProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductExtensionFactory extends DaffModelFactory<DaffProduct> {
  constructor(
    @Inject(DAFF_PRODUCT_EXTRA_FACTORIES) private extraFactories: DaffModelFactory<DaffProduct>[],
    private productKindFactory: DaffProductKindFactory,
  ) {
    super(MockProduct);
  }

  /**
   * Creates a mock product of random type.
   * Includes extra product types that may be provided by optional product packages.
   * This includes all the extra extension factories that may be provided by optional product packages.
   */
  create(partial = {}): DaffProduct {
    return Object.assign(
      {},
      ...this.extraFactories.map(factory => factory.create(partial)),
      // spread this in last to preserve type
      this.productKindFactory.create(partial),
    );
  }
}

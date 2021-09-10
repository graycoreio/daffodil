import {
  Injectable,
  Inject,
} from '@angular/core';

import { daffRandomElement } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

import { DAFF_PRODUCT_TYPE_FACTORIES } from '../injection-tokens/public_api';
import { MockProduct } from './default-product.factory';

/**
 * Factory for creating DaffProducts.
 * This will create a random product kind,
 * including extra product kinds that may be provided by optional product packages.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductKindFactory extends DaffModelFactory<DaffProduct> {
  constructor(
    @Inject(DAFF_PRODUCT_TYPE_FACTORIES) private productTypeFactories: DaffModelFactory<DaffProduct>[],
  ) {
    super(MockProduct);
  }

  private get _randomFactory(): DaffModelFactory<DaffProduct> {
    return daffRandomElement(this.productTypeFactories);
  }

  /**
   * Creates a mock product of random kind.
   * Includes extra product kinds that may be provided by optional product packages.
   */
  create(partial = {}): DaffProduct {
    return this._randomFactory.create(partial);
  }
}

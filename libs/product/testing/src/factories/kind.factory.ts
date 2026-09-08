import {
  Injectable,
  inject,
} from '@angular/core';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

import { MockProduct } from './default-product.factory';
import { DAFF_PRODUCT_TYPE_FACTORIES } from '../injection-tokens/public_api';

/**
 * Factory for creating DaffProducts.
 * This will create a random product kind,
 * including extra product kinds that may be provided by optional product packages.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductKindFactory extends DaffModelFactory<DaffProduct> {
  private readonly productTypeFactories = inject(DAFF_PRODUCT_TYPE_FACTORIES);

  constructor() {
    super(MockProduct);
  }

  private get _randomFactory(): DaffModelFactory<DaffProduct> {
    return sample(this.productTypeFactories);
  }

  /**
   * Creates a mock product of random kind.
   * Includes extra product kinds that may be provided by optional product packages.
   */
  create(partial: Partial<DaffProduct> = {}): DaffProduct {
    return this._randomFactory.create(partial);
  }
}

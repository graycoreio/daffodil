import {
  Injectable,
  Inject,
} from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

import { MockProduct } from './default-product.factory';
import { DaffProductKindFactory } from './kind.factory';
import { DAFF_PRODUCT_EXTRA_FACTORIES } from '../injection-tokens/public_api';

/**
 * Factory for creating `DaffProduct`s with extension fields.
 * This includes all the extra extension factories that may be provided by optional product packages.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductExtensionFactory<T extends DaffProduct = DaffProduct> extends DaffModelFactory<T> {
  constructor(
    @Inject(DAFF_PRODUCT_EXTRA_FACTORIES) private extraFactories: DaffModelFactory<T>[],
    private productKindFactory: DaffProductKindFactory,
  ) {
    super(null);
  }

  /**
   * Creates a mock product of random type.
   * Includes extra product types that may be provided by optional product packages.
   * This includes all the extra extension factories that may be provided by optional product packages.
   */
  create(partial: Partial<T> = {}): T {
    const kind = this.productKindFactory.create(partial);

    return Object.assign(
      {},
      kind,
      ...this.extraFactories.map(factory => factory.create(partial)),
      // spread this in last to preserve kind's type
      { type: kind.type },
    );
  }
}

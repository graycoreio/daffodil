import { Injectable } from '@angular/core';

import {
  DaffCartShippingRateFactory,
  DaffCartTotalFactory,
  MockCart,
} from '@daffodil/cart/testing';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import { DaffProductKindFactory } from '@daffodil/product/testing';

/**
 * Mocked DaffCartWithCrossSellProducts object.
 */
export class MockCartWithCrossSellProducts extends MockCart implements DaffCartWithCrossSellProducts {
  crossSells = this.productFactory.createMany(3);
  crossSellIds = this.crossSells.map((p) => p.id);

  constructor(
    protected productFactory: DaffProductKindFactory,
    totalFactory: DaffCartTotalFactory,
    shippingInformationFactory: DaffCartShippingRateFactory,
  ) {
    super(totalFactory, shippingInformationFactory);
  }
}

/**
 * Factory for creating DaffCartWithCrossSellProductss.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartWithCrossSellProductsFactory extends DaffModelFactory<DaffCartWithCrossSellProducts, typeof MockCartWithCrossSellProducts>{
  constructor(
    productFactory: DaffProductKindFactory,
    totalFactory: DaffCartTotalFactory,
    shippingInformationFactory: DaffCartShippingRateFactory,
  ) {
    super(MockCartWithCrossSellProducts, productFactory, totalFactory, shippingInformationFactory);
  }
}

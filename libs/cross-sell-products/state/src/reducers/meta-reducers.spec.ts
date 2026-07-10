import { TestBed } from '@angular/core/testing';

import { DaffCrossSellProduct } from '@daffodil/cross-sell-products';
import { DaffCrossSellProductFactory } from '@daffodil/cross-sell-products/testing';
import { DaffProduct } from '@daffodil/product';
import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';

import { daffCrossSellProductsDedupeMetaReducer } from './meta-reducers';

interface MockState {
  product: DaffProduct;
}

const initialState: MockState = {
  product: null,
};

function reducer(state: MockState = initialState, action: DaffProductPageLoadSuccess): MockState {
  return {
    ...state,
    product: action.payload.products[0],
  };
}

describe('@daffodil/cross-sell-products/state | daffCrossSellProductsDedupeMetaReducer', () => {
  let mockCrossSellProduct: DaffCrossSellProduct;
  let crossSellProductFactory: DaffCrossSellProductFactory;
  let productFactory: DaffProductFactory;

  let result: MockState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    crossSellProductFactory = TestBed.inject(DaffCrossSellProductFactory);
    mockCrossSellProduct = crossSellProductFactory.create({
      crossSell: productFactory.createMany(3),
    });

    result = daffCrossSellProductsDedupeMetaReducer(reducer)(
      initialState,
      new DaffProductPageLoadSuccess({
        id: mockCrossSellProduct.id,
        products: [mockCrossSellProduct],
      }),
    );
  });

  it('should remove the nested cross-sell products from the payload', () => {
    expect((<DaffCrossSellProduct>result.product).crossSell).toBeFalsy();
  });

  it('should not mutate the original product object', () => {
    expect(mockCrossSellProduct.crossSell).toBeTruthy();
  });
});

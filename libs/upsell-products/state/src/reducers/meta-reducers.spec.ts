import { TestBed } from '@angular/core/testing';
import { DaffUpsellProductFactory } from 'libs/upsell-products/testing/src/factories/public_api';

import { DaffProduct } from '@daffodil/product';
import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';

import { daffUpsellProductsDedupeMetaReducer } from './meta-reducers';

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

describe('@daffodil/upsell-products/state | daffUpsellProductsDedupeMetaReducer', () => {
  let mockUpsellProduct: DaffUpsellProduct;
  let upsellProductFactory: DaffUpsellProductFactory;
  let productFactory: DaffProductFactory;

  let result: MockState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    upsellProductFactory = TestBed.inject(DaffUpsellProductFactory);
    mockUpsellProduct = upsellProductFactory.create({
      upsell: productFactory.createMany(3),
    });

    result = daffUpsellProductsDedupeMetaReducer(reducer)(
      initialState,
      new DaffProductPageLoadSuccess({
        id: mockUpsellProduct.id,
        products: [mockUpsellProduct],
      }),
    );
  });

  it('should remove the nested upsell products from the payload', () => {
    expect((<DaffUpsellProduct>result.product).upsell).toBeFalsy();
  });

  it('should not mutate the original product object', () => {
    expect(mockUpsellProduct.upsell).toBeTruthy();
  });
});

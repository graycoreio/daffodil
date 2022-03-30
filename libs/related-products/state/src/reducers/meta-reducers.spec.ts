import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

import { daffRelatedProductsDedupeMetaReducer } from './meta-reducers';

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

describe('@daffodil/related-products/state | daffRelatedProductsDedupeMetaReducer', () => {
  let mockRelatedProduct: DaffRelatedProduct;
  let relatedProductFactory: DaffRelatedProductFactory;
  let productFactory: DaffProductFactory;

  let result: MockState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    relatedProductFactory = TestBed.inject(DaffRelatedProductFactory);
    mockRelatedProduct = relatedProductFactory.create({
      related: productFactory.createMany(3),
    });

    result = daffRelatedProductsDedupeMetaReducer(reducer)(
      initialState,
      new DaffProductPageLoadSuccess({
        id: mockRelatedProduct.id,
        products: [mockRelatedProduct],
      }),
    );
  });

  it('should remove the nested related products from the payload', () => {
    expect((<DaffRelatedProduct>result.product).related).toBeFalsy();
  });

  it('should not mutate the original product object', () => {
    expect(mockRelatedProduct.related).toBeTruthy();
  });
});

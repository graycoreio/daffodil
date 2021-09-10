import { TestBed } from '@angular/core/testing';

import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';
import { DaffRelatedProductsReducerState } from '@daffodil/related-products/state';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

import {
  initialState,
  daffRelatedProductsReducer,
} from './reducer';

describe('@daffodil/related-products/state | daffRelatedProductsReducer', () => {
  let productFactory: DaffProductFactory;
  let relatedProductFactory: DaffRelatedProductFactory;
  let product: DaffRelatedProduct;
  let productId: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    relatedProductFactory = TestBed.inject(DaffRelatedProductFactory);

    product = relatedProductFactory.create({
      related: productFactory.createMany(3),
    });
    productId = product.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffRelatedProductsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductPageLoadSuccessAction is triggered', () => {
    let result: DaffRelatedProductsReducerState;

    beforeEach(() => {

      const productLoadSuccess = new DaffProductPageLoadSuccess({
        id: productId,
        products: [product],
      });
      result = daffRelatedProductsReducer(initialState, productLoadSuccess);
    });

    it('stores the related product IDs in state', () => {
      product.related.forEach(p => {
        expect(result.relatedProductIds).toContain(p.id);
      });
    });
  });
});

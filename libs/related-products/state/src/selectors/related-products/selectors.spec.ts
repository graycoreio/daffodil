import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffProductPageLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';
import {
  daffRelatedProductsReducers,
  DaffRelatedProductStateRootSlice,
  DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY,
} from '@daffodil/related-products/state';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

import { getDaffRelatedProductsPageSelectors } from './selectors';

describe('selectRelatedProductsState', () => {

  let store: Store<DaffRelatedProductStateRootSlice>;
  let productFactory: DaffProductFactory;
  let relatedProductFactory: DaffRelatedProductFactory;
  let mockProduct: DaffRelatedProduct;
  const {
    selectRelatedProductIds,
    selectRelatedProducts,
  } = getDaffRelatedProductsPageSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY]: combineReducers(daffRelatedProductsReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
        DaffProductTestingModule,
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffProductFactory);
    relatedProductFactory = TestBed.inject(DaffRelatedProductFactory);

    mockProduct = relatedProductFactory.create({
      related: productFactory.createMany(3),
    });

    store.dispatch(new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct, ...mockProduct.related],
    }));
  });

  describe('selectRelatedProductIds', () => {

    it('returns the related product IDs', () => {
      const selector = store.pipe(select(selectRelatedProductIds));
      const expected = cold('a', { a: mockProduct.related.map(({ id }) => id) });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectRelatedProducts', () => {

    it('returns the related products', () => {
      const selector = store.pipe(select(selectRelatedProducts));
      const expected = cold('a', { a: mockProduct.related });

      expect(selector).toBeObservable(expected);
    });
  });
});

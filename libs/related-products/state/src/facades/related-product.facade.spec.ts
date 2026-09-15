import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffProductPageLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import {
  daffRelatedProductsReducers,
  DaffRelatedProductStateRootSlice,
  DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY,
} from '@daffodil/related-products/state';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

import { DaffRelatedProductsFacade } from './related-product.facade';

describe('DaffRelatedProductsFacade', () => {
  let store: Store<DaffRelatedProductStateRootSlice>;
  let facade: DaffRelatedProductsFacade;
  let productFactory: DaffProductFactory;
  let relatedProductFactory: DaffRelatedProductFactory;
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY]: combineReducers(daffRelatedProductsReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
        DaffProductTestingModule,
      ],
      providers: [
        DaffRelatedProductsFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffRelatedProductsFacade);
    productFactory = TestBed.inject(DaffProductFactory);
    relatedProductFactory = TestBed.inject(DaffRelatedProductFactory);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('relatedProducts$', () => {
    it('should return the list of related products', () => {
      const mockProduct = relatedProductFactory.create({
        related: productFactory.createMany(3),
      });
      store.dispatch(new DaffProductPageLoadSuccess({
        id: mockProduct.id,
        products: [mockProduct, ...mockProduct.related],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.relatedProducts$).toBe('a', { a: mockProduct.related });
      });
    });
  });
});

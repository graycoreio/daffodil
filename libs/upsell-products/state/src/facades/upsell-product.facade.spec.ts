import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
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
import {
  daffUpsellProductsReducers,
  DaffUpsellProductStateRootSlice,
  DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY,
} from '@daffodil/upsell-products/state';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

import { DaffUpsellProductsFacade } from './upsell-product.facade';

describe('DaffUpsellProductsFacade', () => {
  let store: Store<DaffUpsellProductStateRootSlice>;
  let facade: DaffUpsellProductsFacade;
  let productFactory: DaffProductFactory;
  let upsellProductFactory: DaffUpsellProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY]: combineReducers(daffUpsellProductsReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
        DaffProductTestingModule,
      ],
      providers: [
        DaffUpsellProductsFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffUpsellProductsFacade);
    productFactory = TestBed.inject(DaffProductFactory);
    upsellProductFactory = TestBed.inject(DaffUpsellProductFactory);
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

  describe('upsellProducts$', () => {
    it('should return the list of upsell products', () => {
      const mockProduct = upsellProductFactory.create({
        upsell: productFactory.createMany(3),
      });
      const expected = cold('a', { a: mockProduct.upsell });
      store.dispatch(new DaffProductPageLoadSuccess({
        id: mockProduct.id,
        products: [mockProduct, ...mockProduct.upsell],
      }));
      expect(facade.upsellProducts$).toBeObservable(expected);
    });
  });
});

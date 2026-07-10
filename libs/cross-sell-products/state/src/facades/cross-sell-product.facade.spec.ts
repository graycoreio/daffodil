import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';
import {
  daffCrossSellProductsReducers,
  DaffCrossSellProductStateRootSlice,
  DAFF_CROSS_SELL_PRODUCTS_STORE_FEATURE_KEY,
  DaffCrossSellProductsListSuccess,
} from '@daffodil/cross-sell-products/state';
import { DaffCrossSellProductFactory } from '@daffodil/cross-sell-products/testing';
import {
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductReducersState,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';

import { DaffCrossSellProductsFacade } from './cross-sell-product.facade';
import { daffCrossSellProductsExtraProductEntitiesReducer } from '../reducers/product-entities/reducer';

describe('DaffCrossSellProductsFacade', () => {
  let store: Store<DaffCrossSellProductStateRootSlice>;
  let facade: DaffCrossSellProductsFacade;
  let productFactory: DaffProductFactory;
  let crossSellProductFactory: DaffCrossSellProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_CROSS_SELL_PRODUCTS_STORE_FEATURE_KEY]: combineReducers(daffCrossSellProductsReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: daffComposeReducers([
            combineReducers(daffProductReducers),
            combineReducers<DaffProductReducersState>({
              products: daffCrossSellProductsExtraProductEntitiesReducer,
              product: daffIdentityReducer,
              productGrid: daffIdentityReducer,
            }),
          ]),
        }),
        DaffProductTestingModule,
      ],
      providers: [
        DaffCrossSellProductsFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCrossSellProductsFacade);
    productFactory = TestBed.inject(DaffProductFactory);
    crossSellProductFactory = TestBed.inject(DaffCrossSellProductFactory);
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

  describe('crossSellProducts$', () => {
    it('should return the list of cross-sell products', () => {
      const mockProduct = crossSellProductFactory.create({
        crossSell: productFactory.createMany(3),
      });
      const expected = cold('a', { a: mockProduct.crossSell });
      store.dispatch(new DaffCrossSellProductsListSuccess(mockProduct.crossSell));
      expect(facade.crossSellProducts$).toBeObservable(expected);
    });
  });
});

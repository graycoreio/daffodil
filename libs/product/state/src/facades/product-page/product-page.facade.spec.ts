import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffProductReducers,
  DaffProductReducersState,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductPageLoad,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageFacade } from './product-page.facade';

describe('DaffProductPageFacade', () => {
  let store: Store<Partial<DaffProductReducersState>>;
  let facade: DaffProductPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
      providers: [
        DaffProductPageFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffProductPageFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('product$', () => {
    it('should initially be undefined', () => {
      const initial = cold('a', { a: undefined });
      expect(facade.product$).toBeObservable(initial);
    });

    it('should be an observable of the currently selected product', () => {
      const product = new DaffProductFactory().create();
      const expected = cold('a', { a: product });
      store.dispatch(new DaffProductPageLoad(product.id));
      store.dispatch(new DaffProductPageLoadSuccess(product));
      expect(facade.product$).toBeObservable(expected);
    });
  });
});

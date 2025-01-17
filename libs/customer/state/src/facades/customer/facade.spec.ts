import { TestBed } from '@angular/core/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffCustomerAddressEntitiesReducer,
  daffCustomerAddressReducer,
  daffCustomerReducer,
  DaffCustomerReducersState,
  DaffCustomerStateRootSlice,
  DAFF_CUSTOMER_STORE_FEATURE_KEY,
} from '@daffodil/customer/state';

import { DaffCustomerPageFacade } from './facade';

describe('@daffodil/customer/state | DaffCustomerPageFacade', () => {
  let store: Store<DaffCustomerStateRootSlice>;
  let facade: DaffCustomerPageFacade;

  let errors: string[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CUSTOMER_STORE_FEATURE_KEY]: combineReducers<DaffCustomerReducersState>({
            customer: daffCustomerReducer,
            address: daffCustomerAddressReducer,
            addressEntities: daffCustomerAddressEntitiesReducer,
          }),
        }),
      ],
      providers: [
        DaffCustomerPageFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCustomerPageFacade);

    errors = [];
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

  describe('customer$', () => {
    it('should be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.customer$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {
    it('should be false if the customer is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: errors });
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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

  let scheduler: TestScheduler;

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

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
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
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.customer$).toBe('a', { a: null });
      });
    });
  });

  describe('loading$', () => {
    it('should be false if the customer is not loading', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: errors });
      });
    });
  });
});

import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffCustomer } from '@daffodil/customer';
import {
  DaffCustomerLoadSuccess,
  daffCustomerReducer,
  DaffCustomerReducersState,
  DAFF_CUSTOMER_STORE_FEATURE_KEY,
  DaffCustomerStateRootSlice,
  daffCustomerAddressReducer,
  daffCustomerAddressEntitiesReducer,
} from '@daffodil/customer/state';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { daffCustomerGetSelectors } from './selector';

describe('@daffodil/customer/state | daffCustomerGetSelectors', () => {
  let store: Store<DaffCustomerStateRootSlice>;
  let customerFactory: DaffCustomerFactory;

  let mockCustomer: DaffCustomer;
  let loading: boolean;
  let errors: string[];

  let scheduler: TestScheduler;

  const {
    selectCustomer,
  } = daffCustomerGetSelectors();

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
    });

    store = TestBed.inject(Store);
    customerFactory = TestBed.inject(DaffCustomerFactory);

    mockCustomer = customerFactory.create();
    loading = false;
    errors = [];

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectCustomer', () => {
    describe('before the customer is loaded', () => {
      it('should return null', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectCustomer));
          expectObservable(selector).toBe('a', { a: null });
        });
      });
    });

    describe('after the customer is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerLoadSuccess(mockCustomer));
      });

      it('should select the customer', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectCustomer));
          expectObservable(selector).toBe('a', { a: mockCustomer });
        });
      });
    });
  });
});

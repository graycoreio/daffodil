import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import {
  DaffCustomerStoreCreditLoadSuccess,
  daffCustomerStoreCreditReducer,
  DaffCustomerStoreCreditReducersState,
  DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY,
  DaffCustomerStoreCreditStateRootSlice,
  daffCustomerStoreCreditInitialState,
} from '@daffodil/customer-store-credit/state';
import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

import { daffCustomerStoreCreditGetSelectors } from './selector';

describe('@daffodil/customer-store-credit/state | daffCustomerStoreCreditGetSelectors', () => {
  let store: Store<DaffCustomerStoreCreditStateRootSlice>;
  let storeCreditFactory: DaffCustomerStoreCreditFactory;

  let mockStoreCredit: DaffCustomerStoreCredit;
  let loading: boolean;
  let errors: string[];
  let scheduler: TestScheduler;

  const {
    selectStoreCredit,
  } = daffCustomerStoreCreditGetSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY]: combineReducers<DaffCustomerStoreCreditReducersState>({
            storeCredit: daffCustomerStoreCreditReducer,
          }),
        }),
      ],
    });

    store = TestBed.inject(Store);
    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);

    mockStoreCredit = storeCreditFactory.create();
    loading = false;
    errors = [];

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectStoreCredit', () => {
    describe('before the store credit is loaded', () => {
      it('should return the initial state', () => {
        const selector = store.pipe(select(selectStoreCredit));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: daffCustomerStoreCreditInitialState.storeCredit });
        });
      });
    });

    describe('after the store credit is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerStoreCreditLoadSuccess(mockStoreCredit));
      });

      it('should select the store credit', () => {
        const selector = store.pipe(select(selectStoreCredit));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockStoreCredit });
        });
      });
    });
  });
});

import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

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
  });

  describe('selectStoreCredit', () => {
    describe('before the store credit is loaded', () => {
      it('should return the initial state', () => {
        const selector = store.pipe(select(selectStoreCredit));
        const expected = cold('a', { a: daffCustomerStoreCreditInitialState.storeCredit });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('after the store credit is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerStoreCreditLoadSuccess(mockStoreCredit));
      });

      it('should select the store credit', () => {
        const selector = store.pipe(select(selectStoreCredit));
        const expected = cold('a', { a: mockStoreCredit });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});

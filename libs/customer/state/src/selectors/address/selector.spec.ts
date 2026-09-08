import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffCustomerAddress } from '@daffodil/customer';
import {
  DaffCustomerAddressLoadSuccess,
  daffCustomerAddressReducer,
  DaffCustomerReducersState,
  DAFF_CUSTOMER_STORE_FEATURE_KEY,
  DaffCustomerStateRootSlice,
  daffCustomerReducer,
  daffCustomerAddressEntitiesReducer,
} from '@daffodil/customer/state';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { daffCustomerAddressGetSelectors } from './selector';

describe('@daffodil/customer/state | daffCustomerAddressGetSelectors', () => {
  let store: Store<DaffCustomerStateRootSlice>;
  let addressFactory: DaffCustomerAddressFactory;

  let mockCustomerAddress: DaffCustomerAddress;
  let loading: boolean;
  let errors: string[];

  let scheduler: TestScheduler;

  const {
    selectAddress,
    selectAddresses,
  } = daffCustomerAddressGetSelectors();

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
    addressFactory = TestBed.inject(DaffCustomerAddressFactory);

    mockCustomerAddress = addressFactory.create();
    loading = false;
    errors = [];

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectAddress', () => {
    describe('before the address is loaded', () => {
      it('should return nully', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectAddress(mockCustomerAddress.id)));
          expectObservable(selector).toBe('a', { a: jasmine.falsy() });
        });
      });
    });

    describe('after the address is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerAddressLoadSuccess(mockCustomerAddress));
      });

      it('should select the address', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectAddress(mockCustomerAddress.id)));
          expectObservable(selector).toBe('a', { a: jasmine.objectContaining(mockCustomerAddress) });
        });
      });
    });
  });

  describe('selectAddresses', () => {
    describe('before the address is loaded', () => {
      it('should return an empty array', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectAddresses));
          expectObservable(selector).toBe('a', { a: []});
        });
      });
    });

    describe('after the address is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerAddressLoadSuccess(mockCustomerAddress));
      });

      it('should select the addresses', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectAddresses));
          expectObservable(selector).toBe('a', { a: [jasmine.objectContaining(mockCustomerAddress)]});
        });
      });
    });
  });
});

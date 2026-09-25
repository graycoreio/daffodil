import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';

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
import { runMarbles } from '@daffodil/jasmine';

import { daffCustomerAddressGetSelectors } from './selector';

describe('@daffodil/customer/state | daffCustomerAddressGetSelectors', () => {
  let store: Store<DaffCustomerStateRootSlice>;
  let addressFactory: DaffCustomerAddressFactory;

  let mockCustomerAddress: DaffCustomerAddress;
  let loading: boolean;
  let errors: string[];

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
  });

  describe('selectAddress', () => {
    describe('before the address is loaded', () => {
      it('should return nully', () => {
        runMarbles(({ expectObservable }) => {
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
        runMarbles(({ expectObservable }) => {
          const selector = store.pipe(select(selectAddress(mockCustomerAddress.id)));
          expectObservable(selector).toBe('a', { a: jasmine.objectContaining(mockCustomerAddress) });
        });
      });
    });
  });

  describe('selectAddresses', () => {
    describe('before the address is loaded', () => {
      it('should return an empty array', () => {
        runMarbles(({ expectObservable }) => {
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
        runMarbles(({ expectObservable }) => {
          const selector = store.pipe(select(selectAddresses));
          expectObservable(selector).toBe('a', { a: [jasmine.objectContaining(mockCustomerAddress)]});
        });
      });
    });
  });
});

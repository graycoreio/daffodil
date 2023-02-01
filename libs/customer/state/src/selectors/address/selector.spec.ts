import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

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

describe('@daffodil/address/state | daffCustomerAddressGetSelectors', () => {
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
        const selector = store.pipe(select(selectAddress(mockCustomerAddress.id)));
        const expected = cold('a', { a: jasmine.falsy() });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('after the address is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerAddressLoadSuccess(mockCustomerAddress));
      });

      it('should select the address', () => {
        const selector = store.pipe(select(selectAddress(mockCustomerAddress.id)));
        const expected = cold('a', { a: jasmine.objectContaining(mockCustomerAddress) });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectAddresses', () => {
    describe('before the address is loaded', () => {
      it('should return an empty array', () => {
        const selector = store.pipe(select(selectAddresses));
        const expected = cold('a', { a: []});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('after the address is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerAddressLoadSuccess(mockCustomerAddress));
      });

      it('should select the addresses', () => {
        const selector = store.pipe(select(selectAddresses));
        const expected = cold('a', { a: [jasmine.objectContaining(mockCustomerAddress)]});

        expect(selector).toBeObservable(expected);
      });
    });
  });
});

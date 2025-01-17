import { TestBed } from '@angular/core/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCustomerAddress } from '@daffodil/customer';
import {
  daffCustomerAddressEntitiesReducer,
  DaffCustomerAddressLoadSuccess,
  daffCustomerAddressReducer,
  daffCustomerReducer,
  DaffCustomerReducersState,
  DaffCustomerStateRootSlice,
  DAFF_CUSTOMER_STORE_FEATURE_KEY,
} from '@daffodil/customer/state';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { DaffCustomerAddressPageFacade } from './facade';

describe('@daffodil/customer/state | DaffCustomerAddressPageFacade', () => {
  let store: Store<DaffCustomerStateRootSlice>;
  let facade: DaffCustomerAddressPageFacade;
  let addressFactory: DaffCustomerAddressFactory;

  let mockAddress: DaffCustomerAddress;

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
        DaffCustomerAddressPageFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCustomerAddressPageFacade);
    addressFactory = TestBed.inject(DaffCustomerAddressFactory);

    mockAddress = addressFactory.create();

    store.dispatch(new DaffCustomerAddressLoadSuccess(mockAddress));
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

  describe('addresses$', () => {
    it('should contain the loaded address', () => {
      const expected = cold('a', { a: jasmine.arrayContaining([jasmine.objectContaining(mockAddress)]) });
      expect(facade.addresses$).toBeObservable(expected);
    });
  });

  describe('getAddress$', () => {
    it('should return the requested address', () => {
      const expected = cold('a', { a: jasmine.objectContaining(mockAddress) });
      expect(facade.getAddress(mockAddress.id)).toBeObservable(expected);
    });
  });
});

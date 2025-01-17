import { TestBed } from '@angular/core/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import {
  DaffCustomerStoreCreditLoadSuccess,
  daffCustomerStoreCreditReducer,
  DaffCustomerStoreCreditReducersState,
  DaffCustomerStoreCreditStateRootSlice,
  DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY,
} from '@daffodil/customer-store-credit/state';
import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

import { DaffCustomerStoreCreditPageFacade } from './facade';

describe('@daffodil/customer-store-credit/state | DaffCustomerStoreCreditPageFacade', () => {
  let store: Store<DaffCustomerStoreCreditStateRootSlice>;
  let facade: DaffCustomerStoreCreditPageFacade;
  let storeCreditFactory: DaffCustomerStoreCreditFactory;

  let mockStoreCredit: DaffCustomerStoreCredit;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY]: combineReducers<DaffCustomerStoreCreditReducersState>({
            storeCredit: daffCustomerStoreCreditReducer,
          }),
        }),
      ],
      providers: [
        DaffCustomerStoreCreditPageFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCustomerStoreCreditPageFacade);
    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);

    mockStoreCredit = storeCreditFactory.create();

    store.dispatch(new DaffCustomerStoreCreditLoadSuccess(mockStoreCredit));
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

  describe('storeCredit$', () => {
    it('should contain the loaded credit', () => {
      const expected = cold('a', { a: mockStoreCredit });
      expect(facade.storeCredit$).toBeObservable(expected);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCustomerPayment } from '@daffodil/customer-payment';
import {
  daffCustomerPaymentEntitiesReducer,
  DaffCustomerPaymentLoadSuccess,
  daffCustomerPaymentReducer,
  DaffCustomerPaymentReducersState,
  DaffCustomerPaymentStateRootSlice,
  DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY,
} from '@daffodil/customer-payment/state';
import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';

import { DaffCustomerPaymentPageFacade } from './facade';

describe('@daffodil/customer-payment/state | DaffCustomerPaymentPageFacade', () => {
  let store: Store<DaffCustomerPaymentStateRootSlice>;
  let facade: DaffCustomerPaymentPageFacade;
  let paymentFactory: DaffCustomerPaymentFactory;

  let mockPayment: DaffCustomerPayment;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY]: combineReducers<DaffCustomerPaymentReducersState>({
            payment: daffCustomerPaymentReducer,
            paymentEntities: daffCustomerPaymentEntitiesReducer,
          }),
        }),
      ],
      providers: [
        DaffCustomerPaymentPageFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCustomerPaymentPageFacade);
    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);

    mockPayment = paymentFactory.create();

    store.dispatch(new DaffCustomerPaymentLoadSuccess(mockPayment));
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

  describe('payments$', () => {
    it('should contain the loaded payment', () => {
      const expected = cold('a', { a: jasmine.arrayContaining([jasmine.objectContaining(mockPayment)]) });
      expect(facade.payments$).toBeObservable(expected);
    });
  });

  describe('getPayment$', () => {
    it('should return the requested payment', () => {
      const expected = cold('a', { a: jasmine.objectContaining(mockPayment) });
      expect(facade.getPayment(mockPayment.id)).toBeObservable(expected);
    });
  });
});

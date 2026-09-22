import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffCustomerPaymentTestingDriverModule } from '@daffodil/customer-payment/driver/testing';
import {
  DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY,
  daffCustomerPaymentProvideExtraReducers,
  DaffCustomerPaymentReducersState,
} from '@daffodil/customer-payment/state';

import { provideDaffCustomerPaymentState } from './provider';

describe('@daffodil/customer-payment/state | provideDaffCustomerPaymentState', () => {
  let store: Store<{ [DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY]: DaffCustomerPaymentReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      imports: [
        DaffCustomerPaymentTestingDriverModule.forRoot(),
      ],
      providers: [
        provideStore(),
        provideEffects(),
        provideDaffCustomerPaymentState(),
        ...daffCustomerPaymentProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the customer payment feature state', () => {
    let state: DaffCustomerPaymentReducersState;
    store.select(DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.payment).toBeDefined();
    expect(state.paymentEntities).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });
});

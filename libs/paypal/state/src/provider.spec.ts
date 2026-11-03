import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import {
  DAFF_PAYMENT_AVAILABLE_PROCESSORS,
  DAFF_PAYMENT_STORE_FEATURE_KEY,
  DaffPaymentReducersState,
} from '@daffodil/payment/state';
import { DAFF_PAYPAL_PAYMENT_KIND } from '@daffodil/paypal';
import { DaffPaypalTestingDriverModule } from '@daffodil/paypal/driver/testing';
import {
  DAFF_PAYPAL_STORE_FEATURE_KEY,
  DaffPaypalEffects,
  DaffPaypalReducersState,
} from '@daffodil/paypal/state';

import {
  provideDaffPaypalPaymentState,
  provideDaffPaypalState,
} from './provider';

describe('@daffodil/paypal/state | provideDaffPaypalState', () => {
  let store: Store<{ [DAFF_PAYPAL_STORE_FEATURE_KEY]: DaffPaypalReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffPaypalTestingDriverModule.forRoot(),
      ],
      providers: [
        provideStore(),
        provideEffects(),
        provideDaffPaypalState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the paypal feature state', () => {
    let state: DaffPaypalReducersState;
    store.select(DAFF_PAYPAL_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.paypal).toBeDefined();
  });

  it('should provide the paypal effects', () => {
    expect(TestBed.inject(DaffPaypalEffects)).toBeTruthy();
  });
});

describe('@daffodil/paypal/state | provideDaffPaypalPaymentState', () => {
  let store: Store<{ [DAFF_PAYMENT_STORE_FEATURE_KEY]: DaffPaymentReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffPaypalPaymentState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the payment feature state', () => {
    let state: DaffPaymentReducersState;
    store.select(DAFF_PAYMENT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.payment).toBeDefined();
  });

  it('should register paypal as an available payment processor', () => {
    expect(TestBed.inject(DAFF_PAYMENT_AVAILABLE_PROCESSORS).map(({ kind }) => kind)).toContain(DAFF_PAYPAL_PAYMENT_KIND);
  });
});

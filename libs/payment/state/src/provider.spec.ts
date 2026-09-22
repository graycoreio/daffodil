import { TestBed } from '@angular/core/testing';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import {
  DAFF_PAYMENT_STORE_FEATURE_KEY,
  daffPaymentProvideExtraReducers,
  DaffPaymentReducersState,
} from '@daffodil/payment/state';

import { provideDaffPaymentState } from './provider';

describe('@daffodil/payment/state | provideDaffPaymentState', () => {
  let store: Store<{ [DAFF_PAYMENT_STORE_FEATURE_KEY]: DaffPaymentReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffPaymentState(),
        ...daffPaymentProvideExtraReducers(extraReducer),
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

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });
});

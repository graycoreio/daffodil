import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import {
  DAFF_AUTHORIZENET_PAYMENT_KIND,
  DaffAcceptJsLoadingService,
} from '@daffodil/authorizenet';
import { DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';
import { DaffTestingAuthorizeNetDriverModule } from '@daffodil/authorizenet/driver/testing';
import {
  DAFF_AUTHORIZE_NET_STATE_CONFIG,
  DAFF_AUTHORIZENET_STORE_FEATURE_KEY,
  daffAuthorizeNetProvideExtraReducers,
  DaffAuthorizeNetReducersState,
  daffAuthorizeNetStateDefaultConfig,
} from '@daffodil/authorizenet/state';
import {
  DAFF_PAYMENT_AVAILABLE_PROCESSORS,
  DAFF_PAYMENT_STORE_FEATURE_KEY,
  DaffPaymentReducersState,
} from '@daffodil/payment/state';

import { DaffAuthorizeNetEffects } from './effects/authorize-net.effects';
import {
  provideDaffAuthorizeNetPaymentState,
  provideDaffAuthorizeNetState,
} from './provider';

describe('@daffodil/authorizenet/state | provideDaffAuthorizeNetState', () => {
  let store: Store<{ [DAFF_AUTHORIZENET_STORE_FEATURE_KEY]: DaffAuthorizeNetReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      imports: [
        DaffTestingAuthorizeNetDriverModule.forRoot(),
      ],
      providers: [
        provideStore(),
        provideEffects(),
        { provide: DaffAcceptJsLoadingService, useValue: jasmine.createSpyObj('DaffAcceptJsLoadingService', ['load', 'getAccept']) },
        { provide: DaffAuthorizeNetPaymentId, useValue: 'authorizenet' },
        provideDaffAuthorizeNetState({ acceptMaxRetries: 10 }),
        ...daffAuthorizeNetProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the authorizenet feature state', () => {
    let state: DaffAuthorizeNetReducersState;
    store.select(DAFF_AUTHORIZENET_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.authorizeNet).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });

  it('should provide the authorizenet effects', () => {
    expect(TestBed.inject(DaffAuthorizeNetEffects)).toBeTruthy();
  });

  it('should merge the passed config over the default config', () => {
    expect(TestBed.inject(DAFF_AUTHORIZE_NET_STATE_CONFIG)).toEqual({
      ...daffAuthorizeNetStateDefaultConfig,
      acceptMaxRetries: 10,
    });
  });
});

describe('@daffodil/authorizenet/state | provideDaffAuthorizeNetPaymentState', () => {
  let store: Store<{ [DAFF_PAYMENT_STORE_FEATURE_KEY]: DaffPaymentReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffAuthorizeNetPaymentState(),
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

  it('should register authorizenet as an available payment processor', () => {
    expect(TestBed.inject(DAFF_PAYMENT_AVAILABLE_PROCESSORS).map(({ kind }) => kind)).toContain(DAFF_AUTHORIZENET_PAYMENT_KIND);
  });
});

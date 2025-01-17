import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffLoginInfo,
  DaffAccountRegistration,
  DaffAuthToken,
} from '@daffodil/auth';
import {
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
  DaffAuthCheck,
  DaffAuthCheckFailure,
  DaffAuthLogin,
  DaffAuthLoginFailure,
  DaffAuthRegister,
  DaffAuthRegisterFailure,
  DaffAuthLoginSuccess,
} from '@daffodil/auth/state';
import {
  DaffAuthTokenFactory,
  DaffAccountRegistrationFactory,
} from '@daffodil/auth/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthFacade } from './facade';

describe('@daffodil/auth/state | DaffAuthFacade', () => {
  let store: Store<any>;
  let facade: DaffAuthFacade;
  let authFactory: DaffAuthTokenFactory;
  let accountRegistrationFactory: DaffAccountRegistrationFactory;

  let mockLoginInfo: DaffLoginInfo;
  let mockRegistration: DaffAccountRegistration;
  let mockAuthToken: DaffAuthToken;
  let errors: string[];
  let loading: boolean;
  let loginErrors: string[];
  let loginLoading: boolean;
  let registerErrors: string[];
  let registerLoading: boolean;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTH_STORE_FEATURE_KEY]: combineReducers(daffAuthReducers),
        }),
      ],
      providers: [
        DaffAuthFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffAuthFacade);
    authFactory = TestBed.inject(DaffAuthTokenFactory);
    accountRegistrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockAuthToken = authFactory.create();
    mockRegistration = accountRegistrationFactory.create();
    mockLoginInfo = {
      email: mockRegistration.email,
      password: mockRegistration.password,
    };
    errors = [];
    loading = false;
    loginErrors = [];
    loginLoading = false;
    registerErrors = [];
    registerLoading = false;
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

  describe('loading$', () => {
    it('should be false if the auth check is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the auth check is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffAuthCheck());
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.errors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed auth check', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'error message',
      };
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffAuthCheckFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('loggedIn$', () => {
    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.loggedIn$).toBeObservable(expected);
    });

    it('should be true upon an auth complete', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffAuthLoginSuccess(null));
      expect(facade.loggedIn$).toBeObservable(expected);
    });
  });
});

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

import { DaffAuthFacade } from './auth.facade';

describe('DaffAuthFacade', () => {
  let store: Store<any>;
  let facade: DaffAuthFacade;
  let authFactory: DaffAuthTokenFactory;
  let accountRegistrationFactory: DaffAccountRegistrationFactory;

  let mockLoginInfo: DaffLoginInfo;
  let mockRegistration: DaffAccountRegistration;
  let mockAuthToken: DaffAuthToken;
  let authErrors: string[];
  let authLoading: boolean;
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
      email: mockRegistration.customer.email,
      password: mockRegistration.password,
    };
    authErrors = [];
    authLoading = false;
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
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('authLoading$', () => {
    it('should be false if the auth check is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.authLoading$).toBeObservable(expected);
    });

    it('should be true if the auth check is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffAuthCheck());
      expect(facade.authLoading$).toBeObservable(expected);
    });
  });

  describe('authErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.authErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed auth check', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'error message',
      };
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffAuthCheckFailure(error));
      expect(facade.authErrors$).toBeObservable(expected);
    });
  });

  describe('loginLoading$', () => {
    it('should be false if the auth login is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loginLoading$).toBeObservable(expected);
    });

    it('should be true if the auth login is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffAuthLogin(mockLoginInfo));
      expect(facade.loginLoading$).toBeObservable(expected);
    });
  });

  describe('loginErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.loginErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed auth login', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'error message',
      };
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffAuthLoginFailure(error));
      expect(facade.loginErrors$).toBeObservable(expected);
    });
  });

  describe('registerLoading$', () => {
    it('should be false if the auth registration is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.registerLoading$).toBeObservable(expected);
    });

    it('should be true if the auth registration is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffAuthRegister(mockRegistration));
      expect(facade.registerLoading$).toBeObservable(expected);
    });
  });

  describe('registerErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.registerErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed auth registration', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'error message',
      };
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffAuthRegisterFailure(error));
      expect(facade.registerErrors$).toBeObservable(expected);
    });
  });

  describe('auth$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.auth$).toBeObservable(expected);
    });

    it('should be an auth token upon a successful login', () => {
      const expected = cold('a', { a: mockAuthToken });
      store.dispatch(new DaffAuthLoginSuccess(mockAuthToken));
      expect(facade.auth$).toBeObservable(expected);
    });
  });

  describe('token$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.token$).toBeObservable(expected);
    });

    it('should be an auth token value upon a successful login', () => {
      const expected = cold('a', { a: mockAuthToken.token });
      store.dispatch(new DaffAuthLoginSuccess(mockAuthToken));
      expect(facade.token$).toBeObservable(expected);
    });
  });
});

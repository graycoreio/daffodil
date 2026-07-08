import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffLoginInfo,
  DaffAccountRegistration,
  DaffAuthToken,
} from '@daffodil/auth';
import {
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
  DaffAuthLoginFailure,
} from '@daffodil/auth/state';
import {
  DaffAuthTokenFactory,
  DaffAccountRegistrationFactory,
} from '@daffodil/auth/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthLoginFacade } from './facade';
import { DaffAuthLogin } from '../../public_api';

describe('@daffodil/auth/state | DaffAuthLoginFacade', () => {
  let store: Store<any>;
  let facade: DaffAuthLoginFacade;
  let authFactory: DaffAuthTokenFactory;
  let accountRegistrationFactory: DaffAccountRegistrationFactory;
  let scheduler: TestScheduler;

  let mockLoginInfo: DaffLoginInfo;
  let mockRegistration: DaffAccountRegistration;
  let mockAuthToken: DaffAuthToken;
  let errors: string[];
  let loading: boolean;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTH_STORE_FEATURE_KEY]: combineReducers(daffAuthReducers),
        }),
      ],
      providers: [
        DaffAuthLoginFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffAuthLoginFacade);
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
    it('should be false if the login is not loading', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the login is loading', () => {
      store.dispatch(new DaffAuthLogin(mockLoginInfo));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [] });
      });
    });

    it('should contain an error upon a failed login', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'error message',
      };
      store.dispatch(new DaffAuthLoginFailure(error));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [error] });
      });
    });
  });
});

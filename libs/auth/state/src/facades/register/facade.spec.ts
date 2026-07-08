import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffAccountRegistration,
  DaffAuthToken,
} from '@daffodil/auth';
import {
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
  DaffAuthRegister,
  DaffAuthRegisterFailure,
} from '@daffodil/auth/state';
import {
  DaffAuthTokenFactory,
  DaffAccountRegistrationFactory,
} from '@daffodil/auth/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthRegisterFacade } from './facade';

describe('@daffodil/auth/state | DaffAuthRegisterFacade', () => {
  let store: Store<any>;
  let facade: DaffAuthRegisterFacade;
  let authFactory: DaffAuthTokenFactory;
  let accountRegistrationFactory: DaffAccountRegistrationFactory;
  let scheduler: TestScheduler;

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
        DaffAuthRegisterFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffAuthRegisterFacade);
    authFactory = TestBed.inject(DaffAuthTokenFactory);
    accountRegistrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockAuthToken = authFactory.create();
    mockRegistration = accountRegistrationFactory.create();
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
    it('should be false if the auth check is not loading', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the auth check is loading', () => {
      store.dispatch(new DaffAuthRegister(mockRegistration));
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

    it('should contain an error upon a failed registration', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'error message',
      };
      store.dispatch(new DaffAuthRegisterFailure(error));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [error] });
      });
    });
  });
});

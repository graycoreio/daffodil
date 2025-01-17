import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

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

  let mockRegistration: DaffAccountRegistration;
  let mockAuthToken: DaffAuthToken;
  let errors: string[];
  let loading: boolean;

  beforeEach(() => {
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
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the auth check is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffAuthRegister(mockRegistration));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.errors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed registration', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'error message',
      };
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffAuthRegisterFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});

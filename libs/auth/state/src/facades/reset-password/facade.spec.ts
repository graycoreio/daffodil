import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import {
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
  DaffResetPassword,
} from '@daffodil/auth/state';
import { DaffAuthResetPasswordInfoFactory } from '@daffodil/auth/testing';
import { DaffStateError } from '@daffodil/core/state';
import { runMarbles } from '@daffodil/jasmine';

import { DaffAuthResetPasswordFacade } from './facade';
import {
  DaffResetPasswordFailure,
  DaffResetPasswordLanding,
} from '../../public_api';

describe('@daffodil/auth/state | DaffAuthResetPasswordFacade', () => {
  let store: Store<any>;
  let facade: DaffAuthResetPasswordFacade;
  let resetInfoFactory: DaffAuthResetPasswordInfoFactory;

  let mockResetInfo: DaffAuthResetPasswordInfo;
  let token: string;
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
        DaffAuthResetPasswordFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffAuthResetPasswordFacade);
    resetInfoFactory = TestBed.inject(DaffAuthResetPasswordInfoFactory);

    mockResetInfo = resetInfoFactory.create();
    token = 'token';
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
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the auth check is loading', () => {
      store.dispatch(new DaffResetPassword(mockResetInfo));
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [] });
      });
    });

    it('should contain an error upon a failed auth check', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'error message',
      };
      store.dispatch(new DaffResetPasswordFailure(error));
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [error] });
      });
    });
  });

  describe('token$', () => {
    it('should initially be null', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.token$).toBe('a', { a: null });
      });
    });

    it('should be an auth token value upon a landing', () => {
      store.dispatch(new DaffResetPasswordLanding(token));
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.token$).toBe('a', { a: token });
      });
    });
  });
});

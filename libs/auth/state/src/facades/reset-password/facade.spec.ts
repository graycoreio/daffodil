import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import {
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
  DaffResetPassword,
} from '@daffodil/auth/state';
import { DaffAuthResetPasswordInfoFactory } from '@daffodil/auth/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthResetPasswordFacade } from './facade';
import {
  DaffResetPasswordFailure,
  DaffResetPasswordLanding,
  DaffResetPasswordSuccess,
} from '../../public_api';

describe('DaffAuthResetPasswordFacade', () => {
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
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the auth check is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffResetPassword(mockResetInfo));
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
      store.dispatch(new DaffResetPasswordFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('token$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.token$).toBeObservable(expected);
    });

    it('should be an auth token value upon a landing', () => {
      const expected = cold('a', { a: token });
      store.dispatch(new DaffResetPasswordLanding(token));
      expect(facade.token$).toBeObservable(expected);
    });
  });
});

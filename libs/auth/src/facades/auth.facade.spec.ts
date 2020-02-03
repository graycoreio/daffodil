import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffAccountRegistrationFactory,
  DaffAuthFactory
} from '@daffodil/auth/testing';

import { DaffAuthFacadeService } from './auth.facade';
import {
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
} from '../actions/auth.actions';
import { authReducers } from '../reducers/auth-reducers';
import { AuthReducersState } from '../reducers/auth-reducers.interface';
import { DaffAuth } from '../models/auth';
import { DaffLoginRequest } from '../models/login-request';
import { DaffAccountRegistration } from '../models/account-registration';

describe('DaffAuthFacadeService', () => {
  let store: MockStore<Partial<AuthReducersState>>;
  let facade: DaffAuthFacadeService;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authFactory: DaffAuthFactory = new DaffAuthFactory();

  let mockAuth: DaffAuth;
  let mockLoginInfo: DaffLoginRequest;
  let token: string;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          auth: combineReducers(authReducers),
        })
      ],
      providers: [
        DaffAuthFacadeService,
      ]
    })

    store = TestBed.get(Store);
    facade = TestBed.get(DaffAuthFacadeService);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    token = mockAuth.token;
    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = {email, password};
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = {type: 'SOME_TYPE'};

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('token$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.token$).toBeObservable(expected);
    });

    it('should be a token after a successful login', () => {
      const expected = cold('a', { a: token });
      store.dispatch(new DaffAuthLoginSuccess(mockAuth));
      expect(facade.token$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {
    it('should be false if the auth state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the auth state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffAuthLogin(mockLoginInfo));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {

    it('should be an empty array initially', () => {
      const initial = cold('a', { a: []});
      expect(facade.errors$).toBeObservable(initial);
    });

    it('should be an observable of an array of the current errors', () => {
      const error = 'error1';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffAuthLogin(mockLoginInfo));
      store.dispatch(new DaffAuthLoginFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});

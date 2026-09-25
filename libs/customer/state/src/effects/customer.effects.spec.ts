import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';

import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';
import {
  DaffCustomerDriverInterface,
  DaffCustomerDriver,
  DaffCustomerInvalidAPIResponseError,
} from '@daffodil/customer/driver';
import { DaffCustomerTestingDriverModule } from '@daffodil/customer/driver/testing';
import {
  DaffCustomerLoad,
  DaffCustomerLoadSuccess,
  DaffCustomerLoadFailure,
  DaffCustomerUpdate,
  DaffCustomerUpdateSuccess,
  DaffCustomerUpdateFailure,
  DaffCustomerChangeEmail,
  DaffCustomerChangeEmailFailure,
  DaffCustomerChangeEmailSuccess,
  DaffCustomerChangePassword,
  DaffCustomerChangePasswordFailure,
  DaffCustomerChangePasswordSuccess,
} from '@daffodil/customer/state';
import { DaffCustomerFactory } from '@daffodil/customer/testing';
import { runMarbles } from '@daffodil/jasmine';

import { DaffCustomerEffects } from './customer.effects';

describe('@daffodil/customer/state | DaffCustomerEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCustomerEffects;

  let mockCustomer: DaffCustomer;

  let customerFactory: DaffCustomerFactory;

  let daffDriver: DaffCustomerDriverInterface;
  let driverGetSpy: jasmine.Spy<DaffCustomerDriverInterface['get']>;
  let driverUpdateSpy: jasmine.Spy<DaffCustomerDriverInterface['update']>;
  let driverPasswordSpy: jasmine.Spy<DaffCustomerDriverInterface['changePassword']>;
  let driverEmailSpy: jasmine.Spy<DaffCustomerDriverInterface['changeEmail']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCustomerTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffCustomerEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject<DaffCustomerEffects<DaffCustomer>>(DaffCustomerEffects);
    daffDriver = TestBed.inject<DaffCustomerDriverInterface>(DaffCustomerDriver);
    customerFactory = TestBed.inject(DaffCustomerFactory);

    mockCustomer = customerFactory.create();

    driverGetSpy = spyOn(daffDriver, 'get');
    driverUpdateSpy = spyOn(daffDriver, 'update');
    driverPasswordSpy = spyOn(daffDriver, 'changePassword');
    driverEmailSpy = spyOn(daffDriver, 'changeEmail');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffCustomerLoadAction is triggered', () => {
    const customerLoadAction = new DaffCustomerLoad();

    describe('and the call to CustomerService is successful', () => {
      it('should dispatch a DaffCustomerLoadSuccess action', () => {
        runMarbles(helpers => {
          driverGetSpy.and.returnValue(of(mockCustomer));
          const customerLoadSuccessAction = new DaffCustomerLoadSuccess(mockCustomer);
          actions$ = helpers.hot('--a', { a: customerLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: customerLoadSuccessAction });
        });
      });
    });

    describe('and the call to CustomerService fails', () => {
      it('should dispatch a DaffCustomerLoadFailure action', () => {
        runMarbles(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer');
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const customerLoadFailureAction = new DaffCustomerLoadFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: customerLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: customerLoadFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerUpdateAction is triggered', () => {
    const customerUpdateAction = new DaffCustomerUpdate(mockCustomer);

    describe('and the call to CustomerService is successful', () => {
      it('should dispatch a DaffCustomerUpdateSuccess action', () => {
        runMarbles(helpers => {
          driverUpdateSpy.and.returnValue(of(mockCustomer));
          const customerUpdateSuccessAction = new DaffCustomerUpdateSuccess(mockCustomer);
          actions$ = helpers.hot('--a', { a: customerUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: customerUpdateSuccessAction });
        });
      });
    });

    describe('and the call to CustomerService fails', () => {
      it('should dispatch a DaffCustomerUpdateFailure action', () => {
        runMarbles(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer');
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const customerUpdateFailureAction = new DaffCustomerUpdateFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: customerUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: customerUpdateFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerChangeEmailAction is triggered', () => {
    const customerChangeEmailAction = new DaffCustomerChangeEmail('email', 'password');

    describe('and the call to CustomerService is successful', () => {
      it('should dispatch a DaffCustomerChangeEmailSuccess action', () => {
        runMarbles(helpers => {
          driverEmailSpy.and.returnValue(of(mockCustomer));
          const customerChangeEmailSuccessAction = new DaffCustomerChangeEmailSuccess(mockCustomer);
          actions$ = helpers.hot('--a', { a: customerChangeEmailAction });
          helpers.expectObservable(effects.changeEmail$).toBe('--b', { b: customerChangeEmailSuccessAction });
        });
      });
    });

    describe('and the call to CustomerService fails', () => {
      it('should dispatch a DaffCustomerChangeEmailFailure action', () => {
        runMarbles(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer');
          const response = helpers.cold<any>('#', {}, error);
          driverEmailSpy.and.returnValue(response);
          const customerChangeEmailFailureAction = new DaffCustomerChangeEmailFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: customerChangeEmailAction });
          helpers.expectObservable(effects.changeEmail$).toBe('--b', { b: customerChangeEmailFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerChangePasswordAction is triggered', () => {
    const customerChangePasswordAction = new DaffCustomerChangePassword('old', 'new');

    describe('and the call to CustomerService is successful', () => {
      it('should dispatch a DaffCustomerChangePasswordSuccess action', () => {
        runMarbles(helpers => {
          driverPasswordSpy.and.returnValue(of(undefined));
          const customerChangePasswordSuccessAction = new DaffCustomerChangePasswordSuccess();
          actions$ = helpers.hot('--a', { a: customerChangePasswordAction });
          helpers.expectObservable(effects.changePassword$).toBe('--b', { b: customerChangePasswordSuccessAction });
        });
      });
    });

    describe('and the call to CustomerService fails', () => {
      it('should dispatch a DaffCustomerChangePasswordFailure action', () => {
        runMarbles(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer');
          const response = helpers.cold<any>('#', {}, error);
          driverPasswordSpy.and.returnValue(response);
          const customerChangePasswordFailureAction = new DaffCustomerChangePasswordFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: customerChangePasswordAction });
          helpers.expectObservable(effects.changePassword$).toBe('--b', { b: customerChangePasswordFailureAction });
        });
      });
    });
  });
});

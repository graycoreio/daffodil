import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
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
    customerFactory = TestBed.inject<DaffCustomerFactory>(DaffCustomerFactory);

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
    let expected;
    const customerLoadAction = new DaffCustomerLoad();

    describe('and the call to CustomerService is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockCustomer));
        const customerLoadSuccessAction = new DaffCustomerLoadSuccess(mockCustomer);
        actions$ = hot('--a', { a: customerLoadAction });
        expected = cold('--b', { b: customerLoadSuccessAction });
      });

      it('should dispatch a DaffCustomerLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CustomerService fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer');
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const customerLoadFailureAction = new DaffCustomerLoadFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: customerLoadAction });
        expected = cold('--b', { b: customerLoadFailureAction });
      });

      it('should dispatch a DaffCustomerLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerUpdateAction is triggered', () => {
    let expected;
    const customerUpdateAction = new DaffCustomerUpdate(mockCustomer);

    describe('and the call to CustomerService is successful', () => {
      beforeEach(() => {
        driverUpdateSpy.and.returnValue(of(mockCustomer));
        const customerUpdateSuccessAction = new DaffCustomerUpdateSuccess(mockCustomer);
        actions$ = hot('--a', { a: customerUpdateAction });
        expected = cold('--b', { b: customerUpdateSuccessAction });
      });

      it('should dispatch a DaffCustomerUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CustomerService fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer');
        const response = cold('#', {}, error);
        driverUpdateSpy.and.returnValue(response);
        const customerUpdateFailureAction = new DaffCustomerUpdateFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: customerUpdateAction });
        expected = cold('--b', { b: customerUpdateFailureAction });
      });

      it('should dispatch a DaffCustomerUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerChangeEmailAction is triggered', () => {
    let expected;
    const customerChangeEmailAction = new DaffCustomerChangeEmail('email', 'password');

    describe('and the call to CustomerService is successful', () => {
      beforeEach(() => {
        driverEmailSpy.and.returnValue(of(mockCustomer));
        const customerChangeEmailSuccessAction = new DaffCustomerChangeEmailSuccess(mockCustomer);
        actions$ = hot('--a', { a: customerChangeEmailAction });
        expected = cold('--b', { b: customerChangeEmailSuccessAction });
      });

      it('should dispatch a DaffCustomerChangeEmailSuccess action', () => {
        expect(effects.changeEmail$).toBeObservable(expected);
      });
    });

    describe('and the call to CustomerService fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer');
        const response = cold('#', {}, error);
        driverEmailSpy.and.returnValue(response);
        const customerChangeEmailFailureAction = new DaffCustomerChangeEmailFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: customerChangeEmailAction });
        expected = cold('--b', { b: customerChangeEmailFailureAction });
      });

      it('should dispatch a DaffCustomerChangeEmailFailure action', () => {
        expect(effects.changeEmail$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerChangePasswordAction is triggered', () => {
    let expected;
    const customerChangePasswordAction = new DaffCustomerChangePassword('old', 'new');

    describe('and the call to CustomerService is successful', () => {
      beforeEach(() => {
        driverPasswordSpy.and.returnValue(of(undefined));
        const customerChangePasswordSuccessAction = new DaffCustomerChangePasswordSuccess();
        actions$ = hot('--a', { a: customerChangePasswordAction });
        expected = cold('--b', { b: customerChangePasswordSuccessAction });
      });

      it('should dispatch a DaffCustomerChangePasswordSuccess action', () => {
        expect(effects.changePassword$).toBeObservable(expected);
      });
    });

    describe('and the call to CustomerService fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer');
        const response = cold('#', {}, error);
        driverPasswordSpy.and.returnValue(response);
        const customerChangePasswordFailureAction = new DaffCustomerChangePasswordFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: customerChangePasswordAction });
        expected = cold('--b', { b: customerChangePasswordFailureAction });
      });

      it('should dispatch a DaffCustomerChangePasswordFailure action', () => {
        expect(effects.changePassword$).toBeObservable(expected);
      });
    });
  });
});

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
} from '@daffodil/customer/state';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { DaffCustomerEffects } from './customer.effects';

describe('@daffodil/customer/state | DaffCustomerEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCustomerEffects;

  let mockCustomer: DaffCustomer;

  let customerFactory: DaffCustomerFactory;

  let daffDriver: DaffCustomerDriverInterface;
  let driverGetSpy: jasmine.Spy;

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
});

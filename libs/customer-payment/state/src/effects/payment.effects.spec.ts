import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { DaffCustomerPayment } from '@daffodil/customer-payment';
import {
  DaffCustomerPaymentDriverInterface,
  DaffCustomerPaymentDriver,
  DaffCustomerPaymentInvalidAPIResponseError,
} from '@daffodil/customer-payment/driver';
import { DaffCustomerPaymentTestingDriverModule } from '@daffodil/customer-payment/driver/testing';
import {
  DaffCustomerPaymentLoad,
  DaffCustomerPaymentLoadSuccess,
  DaffCustomerPaymentLoadFailure,
  DaffCustomerPaymentUpdate,
  DaffCustomerPaymentUpdateSuccess,
  DaffCustomerPaymentUpdateFailure,
  DaffCustomerPaymentDelete,
  DaffCustomerPaymentDeleteFailure,
  DaffCustomerPaymentDeleteSuccess,
  DaffCustomerPaymentAdd,
  DaffCustomerPaymentAddFailure,
  DaffCustomerPaymentAddSuccess,
  DaffCustomerPaymentList,
  DaffCustomerPaymentListFailure,
  DaffCustomerPaymentListSuccess,
} from '@daffodil/customer-payment/state';
import {
  DaffCustomerPaymentFactory,
  DaffCustomerPaymentRequestFactory,
} from '@daffodil/customer-payment/testing';

import { DaffCustomerPaymentEffects } from './payment.effects';

describe('@daffodil/customer-payment/state | DaffCustomerPaymentEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCustomerPaymentEffects;

  let mockPayment: DaffCustomerPayment;

  let paymentFactory: DaffCustomerPaymentFactory;
  let paymentRequestFactory: DaffCustomerPaymentRequestFactory;

  let daffDriver: DaffCustomerPaymentDriverInterface;
  let driverListSpy: jasmine.Spy<DaffCustomerPaymentDriverInterface['list']>;
  let driverGetSpy: jasmine.Spy<DaffCustomerPaymentDriverInterface['get']>;
  let driverUpdateSpy: jasmine.Spy<DaffCustomerPaymentDriverInterface['update']>;
  let driverDeleteSpy: jasmine.Spy<DaffCustomerPaymentDriverInterface['delete']>;
  let driverAddSpy: jasmine.Spy<DaffCustomerPaymentDriverInterface['add']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCustomerPaymentTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffCustomerPaymentEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCustomerPaymentEffects);
    daffDriver = TestBed.inject<DaffCustomerPaymentDriverInterface>(DaffCustomerPaymentDriver);
    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);
    paymentRequestFactory = TestBed.inject(DaffCustomerPaymentRequestFactory);

    mockPayment = paymentFactory.create();

    driverListSpy = spyOn(daffDriver, 'list');
    driverGetSpy = spyOn(daffDriver, 'get');
    driverUpdateSpy = spyOn(daffDriver, 'update');
    driverDeleteSpy = spyOn(daffDriver, 'delete');
    driverAddSpy = spyOn(daffDriver, 'add');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffCustomerPaymentListAction is triggered', () => {
    let listAction: DaffCustomerPaymentList;

    beforeEach(() => {
      listAction = new DaffCustomerPaymentList();
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverListSpy.and.returnValue(of([mockPayment]));
      });

      it('should dispatch a DaffCustomerPaymentListSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const listSuccessAction = new DaffCustomerPaymentListSuccess([mockPayment]);
          actions$ = helpers.hot('--a', { a: listAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: listSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerPaymentListFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to list customer payment');
          const response = helpers.cold<any>('#', {}, error);
          driverListSpy.and.returnValue(response);
          const listFailureAction = new DaffCustomerPaymentListFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: listAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: listFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerPaymentLoadAction is triggered', () => {
    let loadAction: DaffCustomerPaymentLoad;

    beforeEach(() => {
      loadAction = new DaffCustomerPaymentLoad(mockPayment.id);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockPayment));
      });

      it('should dispatch a DaffCustomerPaymentLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const loadSuccessAction = new DaffCustomerPaymentLoadSuccess(mockPayment);
          actions$ = helpers.hot('--a', { a: loadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: loadSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerPaymentLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to load customer payment');
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const loadFailureAction = new DaffCustomerPaymentLoadFailure(daffTransformErrorToStateError(error), mockPayment.id);
          actions$ = helpers.hot('--a', { a: loadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: loadFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerPaymentUpdateAction is triggered', () => {
    let updateAction: DaffCustomerPaymentUpdate;

    beforeEach(() => {
      updateAction = new DaffCustomerPaymentUpdate(mockPayment);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverUpdateSpy.and.returnValue(of([mockPayment]));
      });

      it('should dispatch a DaffCustomerPaymentUpdateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const updateSuccessAction = new DaffCustomerPaymentUpdateSuccess([mockPayment]);
          actions$ = helpers.hot('--a', { a: updateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: updateSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerPaymentUpdateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to load customer payment');
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const updateFailureAction = new DaffCustomerPaymentUpdateFailure(daffTransformErrorToStateError(error), mockPayment.id);
          actions$ = helpers.hot('--a', { a: updateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: updateFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerPaymentDeleteAction is triggered', () => {
    let deleteAction: DaffCustomerPaymentDelete;

    beforeEach(() => {
      deleteAction = new DaffCustomerPaymentDelete(mockPayment.id);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverDeleteSpy.and.returnValue(of([]));
      });

      it('should dispatch a DaffCustomerPaymentDeleteSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const deleteSuccessAction = new DaffCustomerPaymentDeleteSuccess([]);
          actions$ = helpers.hot('--a', { a: deleteAction });
          helpers.expectObservable(effects.delete$).toBe('--b', { b: deleteSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerPaymentDeleteFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to load customer payment');
          const response = helpers.cold<any>('#', {}, error);
          driverDeleteSpy.and.returnValue(response);
          const deleteFailureAction = new DaffCustomerPaymentDeleteFailure(daffTransformErrorToStateError(error), mockPayment.id);
          actions$ = helpers.hot('--a', { a: deleteAction });
          helpers.expectObservable(effects.delete$).toBe('--b', { b: deleteFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerPaymentAddAction is triggered', () => {
    let customerAddAction: DaffCustomerPaymentAdd;

    beforeEach(() => {
      customerAddAction = new DaffCustomerPaymentAdd(paymentRequestFactory.create(), 'placeholder');
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverAddSpy.and.returnValue(of([mockPayment]));
      });

      it('should dispatch a DaffCustomerPaymentAddSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const customerAddSuccessAction = new DaffCustomerPaymentAddSuccess([mockPayment]);
          actions$ = helpers.hot('--a', { a: customerAddAction });
          helpers.expectObservable(effects.add$).toBe('--b', { b: customerAddSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerPaymentAddFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to load customer payment');
          const response = helpers.cold<any>('#', {}, error);
          driverAddSpy.and.returnValue(response);
          const customerAddFailureAction = new DaffCustomerPaymentAddFailure(daffTransformErrorToStateError(error), 'placeholder');
          actions$ = helpers.hot('--a', { a: customerAddAction });
          helpers.expectObservable(effects.add$).toBe('--b', { b: customerAddFailureAction });
        });
      });
    });
  });
});

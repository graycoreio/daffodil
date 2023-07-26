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
    let expected;
    let listAction: DaffCustomerPaymentList;

    beforeEach(() => {
      listAction = new DaffCustomerPaymentList();
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverListSpy.and.returnValue(of([mockPayment]));
        const listSuccessAction = new DaffCustomerPaymentListSuccess([mockPayment]);
        actions$ = hot('--a', { a: listAction });
        expected = cold('--b', { b: listSuccessAction });
      });

      it('should dispatch a DaffCustomerPaymentListSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to list customer payment');
        const response = cold('#', {}, error);
        driverListSpy.and.returnValue(response);
        const listFailureAction = new DaffCustomerPaymentListFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: listAction });
        expected = cold('--b', { b: listFailureAction });
      });

      it('should dispatch a DaffCustomerPaymentListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerPaymentLoadAction is triggered', () => {
    let expected;
    let loadAction: DaffCustomerPaymentLoad;

    beforeEach(() => {
      loadAction = new DaffCustomerPaymentLoad(mockPayment.id);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockPayment));
        const loadSuccessAction = new DaffCustomerPaymentLoadSuccess(mockPayment);
        actions$ = hot('--a', { a: loadAction });
        expected = cold('--b', { b: loadSuccessAction });
      });

      it('should dispatch a DaffCustomerPaymentLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to load customer payment');
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const loadFailureAction = new DaffCustomerPaymentLoadFailure(daffTransformErrorToStateError(error), mockPayment.id);
        actions$ = hot('--a', { a: loadAction });
        expected = cold('--b', { b: loadFailureAction });
      });

      it('should dispatch a DaffCustomerPaymentLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerPaymentUpdateAction is triggered', () => {
    let expected;
    let updateAction: DaffCustomerPaymentUpdate;

    beforeEach(() => {
      updateAction = new DaffCustomerPaymentUpdate(mockPayment);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverUpdateSpy.and.returnValue(of([mockPayment]));
        const updateSuccessAction = new DaffCustomerPaymentUpdateSuccess([mockPayment]);
        actions$ = hot('--a', { a: updateAction });
        expected = cold('--b', { b: updateSuccessAction });
      });

      it('should dispatch a DaffCustomerPaymentUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to load customer payment');
        const response = cold('#', {}, error);
        driverUpdateSpy.and.returnValue(response);
        const updateFailureAction = new DaffCustomerPaymentUpdateFailure(daffTransformErrorToStateError(error), mockPayment.id);
        actions$ = hot('--a', { a: updateAction });
        expected = cold('--b', { b: updateFailureAction });
      });

      it('should dispatch a DaffCustomerPaymentUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerPaymentDeleteAction is triggered', () => {
    let expected;
    let deleteAction: DaffCustomerPaymentDelete;

    beforeEach(() => {
      deleteAction = new DaffCustomerPaymentDelete(mockPayment.id);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverDeleteSpy.and.returnValue(of([]));
        const deleteSuccessAction = new DaffCustomerPaymentDeleteSuccess([]);
        actions$ = hot('--a', { a: deleteAction });
        expected = cold('--b', { b: deleteSuccessAction });
      });

      it('should dispatch a DaffCustomerPaymentDeleteSuccess action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to load customer payment');
        const response = cold('#', {}, error);
        driverDeleteSpy.and.returnValue(response);
        const deleteFailureAction = new DaffCustomerPaymentDeleteFailure(daffTransformErrorToStateError(error), mockPayment.id);
        actions$ = hot('--a', { a: deleteAction });
        expected = cold('--b', { b: deleteFailureAction });
      });

      it('should dispatch a DaffCustomerPaymentDeleteFailure action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerPaymentAddAction is triggered', () => {
    let expected;
    let customerAddAction: DaffCustomerPaymentAdd;

    beforeEach(() => {
      customerAddAction = new DaffCustomerPaymentAdd(paymentRequestFactory.create(), 'placeholder');
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverAddSpy.and.returnValue(of([mockPayment]));
        const customerAddSuccessAction = new DaffCustomerPaymentAddSuccess([mockPayment]);
        actions$ = hot('--a', { a: customerAddAction });
        expected = cold('--b', { b: customerAddSuccessAction });
      });

      it('should dispatch a DaffCustomerPaymentAddSuccess action', () => {
        expect(effects.add$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerPaymentInvalidAPIResponseError('Failed to load customer payment');
        const response = cold('#', {}, error);
        driverAddSpy.and.returnValue(response);
        const customerAddFailureAction = new DaffCustomerPaymentAddFailure(daffTransformErrorToStateError(error), 'placeholder');
        actions$ = hot('--a', { a: customerAddAction });
        expected = cold('--b', { b: customerAddFailureAction });
      });

      it('should dispatch a DaffCustomerPaymentAddFailure action', () => {
        expect(effects.add$).toBeObservable(expected);
      });
    });
  });
});

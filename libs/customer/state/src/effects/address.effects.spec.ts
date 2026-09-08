import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { DaffCustomerAddress } from '@daffodil/customer';
import {
  DaffCustomerAddressDriverInterface,
  DaffCustomerAddressDriver,
  DaffCustomerInvalidAPIResponseError,
} from '@daffodil/customer/driver';
import { DaffCustomerTestingDriverModule } from '@daffodil/customer/driver/testing';
import {
  DaffCustomerAddressLoad,
  DaffCustomerAddressLoadSuccess,
  DaffCustomerAddressLoadFailure,
  DaffCustomerAddressUpdate,
  DaffCustomerAddressUpdateSuccess,
  DaffCustomerAddressUpdateFailure,
  DaffCustomerAddressDelete,
  DaffCustomerAddressDeleteFailure,
  DaffCustomerAddressDeleteSuccess,
  DaffCustomerAddressAdd,
  DaffCustomerAddressAddFailure,
  DaffCustomerAddressAddSuccess,
  DaffCustomerAddressList,
  DaffCustomerAddressListFailure,
  DaffCustomerAddressListSuccess,
} from '@daffodil/customer/state';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { DaffCustomerAddressEffects } from './address.effects';

describe('@daffodil/customer/state | DaffCustomerAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCustomerAddressEffects;

  let mockAddress: DaffCustomerAddress;

  let addressFactory: DaffCustomerAddressFactory;

  let daffDriver: DaffCustomerAddressDriverInterface;
  let driverListSpy: jasmine.Spy<DaffCustomerAddressDriverInterface['list']>;
  let driverGetSpy: jasmine.Spy<DaffCustomerAddressDriverInterface['get']>;
  let driverUpdateSpy: jasmine.Spy<DaffCustomerAddressDriverInterface['update']>;
  let driverDeleteSpy: jasmine.Spy<DaffCustomerAddressDriverInterface['delete']>;
  let driverAddSpy: jasmine.Spy<DaffCustomerAddressDriverInterface['add']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCustomerTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffCustomerAddressEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCustomerAddressEffects);
    daffDriver = TestBed.inject<DaffCustomerAddressDriverInterface>(DaffCustomerAddressDriver);
    addressFactory = TestBed.inject(DaffCustomerAddressFactory);

    mockAddress = addressFactory.create();

    driverListSpy = spyOn(daffDriver, 'list');
    driverGetSpy = spyOn(daffDriver, 'get');
    driverUpdateSpy = spyOn(daffDriver, 'update');
    driverDeleteSpy = spyOn(daffDriver, 'delete');
    driverAddSpy = spyOn(daffDriver, 'add');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffCustomerAddressListAction is triggered', () => {
    let listAction: DaffCustomerAddressList;

    beforeEach(() => {
      listAction = new DaffCustomerAddressList();
    });

    describe('and the call to the driver is successful', () => {
      it('should dispatch a DaffCustomerAddressListSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverListSpy.and.returnValue(of([mockAddress]));
          const listSuccessAction = new DaffCustomerAddressListSuccess([mockAddress]);
          actions$ = helpers.hot('--a', { a: listAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: listSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerAddressListFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to list customer address');
          const response = helpers.cold<any>('#', {}, error);
          driverListSpy.and.returnValue(response);
          const listFailureAction = new DaffCustomerAddressListFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: listAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: listFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerAddressLoadAction is triggered', () => {
    let loadAction: DaffCustomerAddressLoad;

    beforeEach(() => {
      loadAction = new DaffCustomerAddressLoad(mockAddress.id);
    });

    describe('and the call to the driver is successful', () => {
      it('should dispatch a DaffCustomerAddressLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of(mockAddress));
          const loadSuccessAction = new DaffCustomerAddressLoadSuccess(mockAddress);
          actions$ = helpers.hot('--a', { a: loadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: loadSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerAddressLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer address');
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const loadFailureAction = new DaffCustomerAddressLoadFailure(daffTransformErrorToStateError(error), mockAddress.id);
          actions$ = helpers.hot('--a', { a: loadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: loadFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerAddressUpdateAction is triggered', () => {
    let updateAction: DaffCustomerAddressUpdate;

    beforeEach(() => {
      updateAction = new DaffCustomerAddressUpdate(mockAddress);
    });

    describe('and the call to the driver is successful', () => {
      it('should dispatch a DaffCustomerAddressUpdateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverUpdateSpy.and.returnValue(of([mockAddress]));
          const updateSuccessAction = new DaffCustomerAddressUpdateSuccess([mockAddress]);
          actions$ = helpers.hot('--a', { a: updateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: updateSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerAddressUpdateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer address');
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const updateFailureAction = new DaffCustomerAddressUpdateFailure(daffTransformErrorToStateError(error), mockAddress.id);
          actions$ = helpers.hot('--a', { a: updateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: updateFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerAddressDeleteAction is triggered', () => {
    let deleteAction: DaffCustomerAddressDelete;

    beforeEach(() => {
      deleteAction = new DaffCustomerAddressDelete(mockAddress.id);
    });

    describe('and the call to the driver is successful', () => {
      it('should dispatch a DaffCustomerAddressDeleteSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverDeleteSpy.and.returnValue(of([]));
          const deleteSuccessAction = new DaffCustomerAddressDeleteSuccess([]);
          actions$ = helpers.hot('--a', { a: deleteAction });
          helpers.expectObservable(effects.delete$).toBe('--b', { b: deleteSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerAddressDeleteFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer address');
          const response = helpers.cold<any>('#', {}, error);
          driverDeleteSpy.and.returnValue(response);
          const deleteFailureAction = new DaffCustomerAddressDeleteFailure(daffTransformErrorToStateError(error), mockAddress.id);
          actions$ = helpers.hot('--a', { a: deleteAction });
          helpers.expectObservable(effects.delete$).toBe('--b', { b: deleteFailureAction });
        });
      });
    });
  });

  describe('when DaffCustomerAddressAddAction is triggered', () => {
    const customerAddAction = new DaffCustomerAddressAdd(mockAddress, 'placeholder');

    describe('and the call to the driver is successful', () => {
      it('should dispatch a DaffCustomerAddressAddSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverAddSpy.and.returnValue(of([mockAddress]));
          const customerAddSuccessAction = new DaffCustomerAddressAddSuccess([mockAddress]);
          actions$ = helpers.hot('--a', { a: customerAddAction });
          helpers.expectObservable(effects.add$).toBe('--b', { b: customerAddSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCustomerAddressAddFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer address');
          const response = helpers.cold<any>('#', {}, error);
          driverAddSpy.and.returnValue(response);
          const customerAddFailureAction = new DaffCustomerAddressAddFailure(daffTransformErrorToStateError(error), 'placeholder');
          actions$ = helpers.hot('--a', { a: customerAddAction });
          helpers.expectObservable(effects.add$).toBe('--b', { b: customerAddFailureAction });
        });
      });
    });
  });
});

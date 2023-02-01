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
import {
  DaffCustomer,
  DaffCustomerAddress,
} from '@daffodil/customer';
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
    let expected;
    let listAction: DaffCustomerAddressList;

    beforeEach(() => {
      listAction = new DaffCustomerAddressList();
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverListSpy.and.returnValue(of([mockAddress]));
        const listSuccessAction = new DaffCustomerAddressListSuccess([mockAddress]);
        actions$ = hot('--a', { a: listAction });
        expected = cold('--b', { b: listSuccessAction });
      });

      it('should dispatch a DaffCustomerAddressListSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to list customer address');
        const response = cold('#', {}, error);
        driverListSpy.and.returnValue(response);
        const listFailureAction = new DaffCustomerAddressListFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: listAction });
        expected = cold('--b', { b: listFailureAction });
      });

      it('should dispatch a DaffCustomerAddressListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerAddressLoadAction is triggered', () => {
    let expected;
    let loadAction: DaffCustomerAddressLoad;

    beforeEach(() => {
      loadAction = new DaffCustomerAddressLoad(mockAddress.id);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockAddress));
        const loadSuccessAction = new DaffCustomerAddressLoadSuccess(mockAddress);
        actions$ = hot('--a', { a: loadAction });
        expected = cold('--b', { b: loadSuccessAction });
      });

      it('should dispatch a DaffCustomerAddressLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer address');
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const loadFailureAction = new DaffCustomerAddressLoadFailure(daffTransformErrorToStateError(error), mockAddress.id);
        actions$ = hot('--a', { a: loadAction });
        expected = cold('--b', { b: loadFailureAction });
      });

      it('should dispatch a DaffCustomerAddressLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerAddressUpdateAction is triggered', () => {
    let expected;
    let updateAction: DaffCustomerAddressUpdate;

    beforeEach(() => {
      updateAction = new DaffCustomerAddressUpdate(mockAddress);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverUpdateSpy.and.returnValue(of([mockAddress]));
        const updateSuccessAction = new DaffCustomerAddressUpdateSuccess([mockAddress]);
        actions$ = hot('--a', { a: updateAction });
        expected = cold('--b', { b: updateSuccessAction });
      });

      it('should dispatch a DaffCustomerAddressUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer address');
        const response = cold('#', {}, error);
        driverUpdateSpy.and.returnValue(response);
        const updateFailureAction = new DaffCustomerAddressUpdateFailure(daffTransformErrorToStateError(error), mockAddress.id);
        actions$ = hot('--a', { a: updateAction });
        expected = cold('--b', { b: updateFailureAction });
      });

      it('should dispatch a DaffCustomerAddressUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerAddressDeleteAction is triggered', () => {
    let expected;
    let deleteAction: DaffCustomerAddressDelete;

    beforeEach(() => {
      deleteAction = new DaffCustomerAddressDelete(mockAddress.id);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverDeleteSpy.and.returnValue(of([]));
        const deleteSuccessAction = new DaffCustomerAddressDeleteSuccess([]);
        actions$ = hot('--a', { a: deleteAction });
        expected = cold('--b', { b: deleteSuccessAction });
      });

      it('should dispatch a DaffCustomerAddressDeleteSuccess action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer address');
        const response = cold('#', {}, error);
        driverDeleteSpy.and.returnValue(response);
        const deleteFailureAction = new DaffCustomerAddressDeleteFailure(daffTransformErrorToStateError(error), mockAddress.id);
        actions$ = hot('--a', { a: deleteAction });
        expected = cold('--b', { b: deleteFailureAction });
      });

      it('should dispatch a DaffCustomerAddressDeleteFailure action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCustomerAddressAddAction is triggered', () => {
    let expected;
    const customerAddAction = new DaffCustomerAddressAdd(mockAddress, 'placeholder');

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverAddSpy.and.returnValue(of([mockAddress]));
        const customerAddSuccessAction = new DaffCustomerAddressAddSuccess([mockAddress]);
        actions$ = hot('--a', { a: customerAddAction });
        expected = cold('--b', { b: customerAddSuccessAction });
      });

      it('should dispatch a DaffCustomerAddressAddSuccess action', () => {
        expect(effects.add$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerInvalidAPIResponseError('Failed to load customer address');
        const response = cold('#', {}, error);
        driverAddSpy.and.returnValue(response);
        const customerAddFailureAction = new DaffCustomerAddressAddFailure(daffTransformErrorToStateError(error), 'placeholder');
        actions$ = hot('--a', { a: customerAddAction });
        expected = cold('--b', { b: customerAddFailureAction });
      });

      it('should dispatch a DaffCustomerAddressAddFailure action', () => {
        expect(effects.add$).toBeObservable(expected);
      });
    });
  });
});

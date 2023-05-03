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
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import {
  DaffCustomerStoreCreditDriverInterface,
  DaffCustomerStoreCreditDriver,
  DaffCustomerStoreCreditInvalidAPIResponseError,
} from '@daffodil/customer-store-credit/driver';
import { DaffCustomerStoreCreditTestingDriverModule } from '@daffodil/customer-store-credit/driver/testing';
import {
  DaffCustomerStoreCreditLoad,
  DaffCustomerStoreCreditLoadFailure,
  DaffCustomerStoreCreditLoadSuccess,
} from '@daffodil/customer-store-credit/state';
import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

import { DaffCustomerStoreCreditEffects } from './store-credit.effects';

describe('@daffodil/customer-store-credit/state | DaffCustomerStoreCreditEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCustomerStoreCreditEffects;

  let mockStoreCredit: DaffCustomerStoreCredit;

  let storeCreditFactory: DaffCustomerStoreCreditFactory;

  let daffDriver: DaffCustomerStoreCreditDriverInterface;
  let driverGetSpy: jasmine.Spy<DaffCustomerStoreCreditDriverInterface['get']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCustomerStoreCreditTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffCustomerStoreCreditEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCustomerStoreCreditEffects);
    daffDriver = TestBed.inject<DaffCustomerStoreCreditDriverInterface>(DaffCustomerStoreCreditDriver);
    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);

    mockStoreCredit = storeCreditFactory.create();

    driverGetSpy = spyOn(daffDriver, 'get');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffCustomerStoreCreditLoadAction is triggered', () => {
    let expected;
    let listAction: DaffCustomerStoreCreditLoad;

    beforeEach(() => {
      listAction = new DaffCustomerStoreCreditLoad();
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockStoreCredit));
        const listSuccessAction = new DaffCustomerStoreCreditLoadSuccess(mockStoreCredit);
        actions$ = hot('--a', { a: listAction });
        expected = cold('--b', { b: listSuccessAction });
      });

      it('should dispatch a DaffCustomerStoreCreditLoadSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCustomerStoreCreditInvalidAPIResponseError('Failed to list customer store credit');
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const listFailureAction = new DaffCustomerStoreCreditLoadFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: listAction });
        expected = cold('--b', { b: listFailureAction });
      });

      it('should dispatch a DaffCustomerStoreCreditLoadFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});

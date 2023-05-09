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

import { DaffCartStorageService } from '@daffodil/cart';
import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import {
  DaffCartStoreCreditDriverInterface,
  DaffCartStoreCreditDriver,
  DaffCartStoreCreditInvalidAPIResponseError,
} from '@daffodil/cart-store-credit/driver';
import { DaffCartStoreCreditTestingDriverModule } from '@daffodil/cart-store-credit/driver/testing';
import {
  DaffCartStoreCreditApply,
  DaffCartStoreCreditApplyFailure,
  DaffCartStoreCreditApplySuccess,
  DaffCartStoreCreditRemove,
  DaffCartStoreCreditRemoveFailure,
  DaffCartStoreCreditRemoveSuccess,
} from '@daffodil/cart-store-credit/state';
import { DaffCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/testing';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffCartStoreCreditEffects } from './store-credit.effects';

describe('@daffodil/cart-store-credit/state | DaffCartStoreCreditEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartStoreCreditEffects;

  let mockCartWithStoreCredit: DaffCartWithStoreCredit;

  let cartWithStoreCreditFactory: DaffCartWithStoreCreditFactory;

  let daffDriver: DaffCartStoreCreditDriverInterface;
  let driverApplySpy: jasmine.Spy<DaffCartStoreCreditDriverInterface['apply']>;
  let driverRemoveSpy: jasmine.Spy<DaffCartStoreCreditDriverInterface['remove']>;
  let cartIdStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    cartIdStorageSpy = jasmine.createSpyObj('DaffCartStorageService', ['getCartId']);

    TestBed.configureTestingModule({
      imports: [
        DaffCartStoreCreditTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffCartStoreCreditEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartStorageService,
          useValue: cartIdStorageSpy,
        },
      ],
    });

    effects = TestBed.inject(DaffCartStoreCreditEffects);
    daffDriver = TestBed.inject<DaffCartStoreCreditDriverInterface>(DaffCartStoreCreditDriver);
    cartWithStoreCreditFactory = TestBed.inject(DaffCartWithStoreCreditFactory);

    mockCartWithStoreCredit = cartWithStoreCreditFactory.create();

    driverApplySpy = spyOn(daffDriver, 'apply');
    driverRemoveSpy = spyOn(daffDriver, 'remove');
    cartIdStorageSpy.getCartId.and.returnValue(mockCartWithStoreCredit.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffCartStoreCreditApplyAction is triggered', () => {
    let expected;
    let applyAction: DaffCartStoreCreditApply;

    beforeEach(() => {
      applyAction = new DaffCartStoreCreditApply();
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverApplySpy.and.returnValue(of(mockCartWithStoreCredit));
        const applySuccessAction = new DaffCartStoreCreditApplySuccess(mockCartWithStoreCredit);
        actions$ = hot('--a', { a: applyAction });
        expected = cold('--b', { b: applySuccessAction });
      });

      it('should dispatch a DaffCartStoreCreditApplySuccess action', () => {
        expect(effects.apply$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCartStoreCreditInvalidAPIResponseError('Failed to apply cart store credit');
        const response = cold('#', {}, error);
        driverApplySpy.and.returnValue(response);
        const applyFailureAction = new DaffCartStoreCreditApplyFailure([daffTransformErrorToStateError(error)]);
        actions$ = hot('--a', { a: applyAction });
        expected = cold('--b', { b: applyFailureAction });
      });

      it('should dispatch a DaffCartStoreCreditApplyFailure action', () => {
        expect(effects.apply$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCartStoreCreditRemoveAction is triggered', () => {
    let expected;
    let removeAction: DaffCartStoreCreditRemove;

    beforeEach(() => {
      removeAction = new DaffCartStoreCreditRemove();
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverRemoveSpy.and.returnValue(of(mockCartWithStoreCredit));
        const removeSuccessAction = new DaffCartStoreCreditRemoveSuccess(mockCartWithStoreCredit);
        actions$ = hot('--a', { a: removeAction });
        expected = cold('--b', { b: removeSuccessAction });
      });

      it('should dispatch a DaffCartStoreCreditRemoveSuccess action', () => {
        expect(effects.remove$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCartStoreCreditInvalidAPIResponseError('Failed to remove cart store credit');
        const response = cold('#', {}, error);
        driverRemoveSpy.and.returnValue(response);
        const removeFailureAction = new DaffCartStoreCreditRemoveFailure([daffTransformErrorToStateError(error)]);
        actions$ = hot('--a', { a: removeAction });
        expected = cold('--b', { b: removeFailureAction });
      });

      it('should dispatch a DaffCartStoreCreditRemoveFailure action', () => {
        expect(effects.remove$).toBeObservable(expected);
      });
    });
  });
});

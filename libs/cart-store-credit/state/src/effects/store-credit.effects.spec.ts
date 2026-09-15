import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

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
    let applyAction: DaffCartStoreCreditApply;

    beforeEach(() => {
      applyAction = new DaffCartStoreCreditApply();
    });

    describe('and the call to the driver is successful', () => {
      it('should dispatch a DaffCartStoreCreditApplySuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverApplySpy.and.returnValue(of(mockCartWithStoreCredit));
          const applySuccessAction = new DaffCartStoreCreditApplySuccess(mockCartWithStoreCredit);
          actions$ = helpers.hot('--a', { a: applyAction });
          helpers.expectObservable(effects.apply$).toBe('--b', { b: applySuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCartStoreCreditApplyFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCartStoreCreditInvalidAPIResponseError('Failed to apply cart store credit');
          driverApplySpy.and.returnValue(helpers.cold<any>('#', {}, error));
          const applyFailureAction = new DaffCartStoreCreditApplyFailure([daffTransformErrorToStateError(error)]);
          actions$ = helpers.hot('--a', { a: applyAction });
          helpers.expectObservable(effects.apply$).toBe('--b', { b: applyFailureAction });
        });
      });
    });
  });

  describe('when DaffCartStoreCreditRemoveAction is triggered', () => {
    let removeAction: DaffCartStoreCreditRemove;

    beforeEach(() => {
      removeAction = new DaffCartStoreCreditRemove();
    });

    describe('and the call to the driver is successful', () => {
      it('should dispatch a DaffCartStoreCreditRemoveSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverRemoveSpy.and.returnValue(of(mockCartWithStoreCredit));
          const removeSuccessAction = new DaffCartStoreCreditRemoveSuccess(mockCartWithStoreCredit);
          actions$ = helpers.hot('--a', { a: removeAction });
          helpers.expectObservable(effects.remove$).toBe('--b', { b: removeSuccessAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DaffCartStoreCreditRemoveFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCartStoreCreditInvalidAPIResponseError('Failed to remove cart store credit');
          driverRemoveSpy.and.returnValue(helpers.cold<any>('#', {}, error));
          const removeFailureAction = new DaffCartStoreCreditRemoveFailure([daffTransformErrorToStateError(error)]);
          actions$ = helpers.hot('--a', { a: removeAction });
          helpers.expectObservable(effects.remove$).toBe('--b', { b: removeFailureAction });
        });
      });
    });
  });
});

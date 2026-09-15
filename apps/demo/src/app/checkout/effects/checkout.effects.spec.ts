import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartAddress,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartInvalidAPIResponseError,
  DaffCartShippingAddressDriver,
  DaffCartShippingAddressServiceInterface,
  DaffCartShippingInformationDriver,
  DaffCartShippingInformationServiceInterface,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartAddressFactory,
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { CheckoutEffects } from './checkout.effects';
import {
  DemoCompleteAddressStep,
  DemoCompleteAddressStepFailure,
  DemoCompleteAddressStepSuccess,
  DemoCompleteBillingStepSuccess,
  DemoCompleteShippingStep,
  DemoCompleteShippingStepFailure,
  DemoCompleteShippingStepSuccess,
} from '../actions/checkout-step.actions';
import { DemoCheckoutStep } from '../step/step.enum';
import { DemoCheckoutStepService } from '../step/step.service';

describe('CheckoutEffects', () => {
  let actions$: Observable<any>;
  let effects: CheckoutEffects;
  let router: Router;
  let cartFactory: DaffCartFactory;
  let addressFactory: DaffCartAddressFactory;
  let shippingFactory: DaffCartShippingRateFactory;
  let stubCart: DaffCart;
  let mockAddress: DaffCartAddress;
  let mockShipping: DaffCartShippingRate;
  let shippingAddressUpdateSpy: jasmine.Spy<DaffCartShippingAddressServiceInterface['update']>;
  let shippingUpdateSpy: jasmine.Spy<DaffCartShippingInformationServiceInterface['update']>;
  let stepServiceSpy: jasmine.SpyObj<DemoCheckoutStepService>;

  beforeEach(() => {
    stepServiceSpy = jasmine.createSpyObj('DemoCheckoutStepService', ['goToStep']);

    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        CheckoutEffects,
        provideMockActions(() => actions$),
        {
          provide: DemoCheckoutStepService,
          useValue: stepServiceSpy,
        },
      ],
    });

    shippingAddressUpdateSpy = spyOn(TestBed.inject(DaffCartShippingAddressDriver), 'update');
    shippingUpdateSpy = spyOn(TestBed.inject(DaffCartShippingInformationDriver), 'update');
    effects = TestBed.inject(CheckoutEffects);
    router = TestBed.inject(Router);
    cartFactory = TestBed.inject(DaffCartFactory);
    addressFactory = TestBed.inject(DaffCartAddressFactory);
    shippingFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockAddress = addressFactory.create();
    mockShipping = shippingFactory.create();
    stubCart = cartFactory.create();
    spyOn(router, 'navigateByUrl');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DemoCompleteAddressStepAction is triggered', () => {
    let action: DemoCompleteAddressStep;

    beforeEach(() => {
      action = new DemoCompleteAddressStep(mockAddress);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        shippingAddressUpdateSpy.and.returnValue(of(stubCart));
      });

      it('should dispatch a DemoCompleteAddressStepSuccess action', () => {
        const successAction = new DemoCompleteAddressStepSuccess(stubCart);
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: action });
          helpers.expectObservable(effects.completeAddressStep$).toBe('--b', { b: successAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DemoCompleteAddressStepFailure action', () => {
        const error = new DaffCartInvalidAPIResponseError('Failed to list customer address');
        const failureAction = new DemoCompleteAddressStepFailure([daffTransformErrorToStateError(error)]);
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          shippingAddressUpdateSpy.and.returnValue(helpers.cold<any>('#', {}, error));
          actions$ = helpers.hot('--a', { a: action });
          helpers.expectObservable(effects.completeAddressStep$).toBe('--b', { b: failureAction });
        });
      });
    });
  });

  describe('when DemoCompleteAddressStepSuccessAction is triggered', () => {
    let action: DemoCompleteAddressStepSuccess;

    beforeEach(() => {
      action = new DemoCompleteAddressStepSuccess(stubCart);
    });

    it('should go to the shipping step', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: action });
        helpers.expectObservable(effects.onCompleteAddressStep$).toBe('---');
      });
      expect(stepServiceSpy.goToStep).toHaveBeenCalledOnceWith(DemoCheckoutStep.SHIPPING);
    });
  });

  describe('when DemoCompleteShippingStepAction is triggered', () => {
    let action: DemoCompleteShippingStep;

    beforeEach(() => {
      action = new DemoCompleteShippingStep(mockShipping);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        shippingUpdateSpy.and.returnValue(of(stubCart));
      });

      it('should dispatch a DemoCompleteShippingStepSuccess action', () => {
        const successAction = new DemoCompleteShippingStepSuccess(stubCart);
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: action });
          helpers.expectObservable(effects.completeShippingStep$).toBe('--b', { b: successAction });
        });
      });
    });

    describe('and the call to the driver fails', () => {
      it('should dispatch a DemoCompleteShippingStepFailure action', () => {
        const error = new DaffCartInvalidAPIResponseError('Failed to list customer address');
        const failureAction = new DemoCompleteShippingStepFailure([daffTransformErrorToStateError(error)]);
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          shippingUpdateSpy.and.returnValue(helpers.cold<any>('#', {}, error));
          actions$ = helpers.hot('--a', { a: action });
          helpers.expectObservable(effects.completeShippingStep$).toBe('--b', { b: failureAction });
        });
      });
    });
  });

  describe('when DemoCompleteShippingStepSuccessAction is triggered', () => {
    let action: DemoCompleteShippingStepSuccess;

    beforeEach(() => {
      action = new DemoCompleteShippingStepSuccess(stubCart);
    });

    it('should go to the billing step', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: action });
        helpers.expectObservable(effects.onCompleteShippingStep$).toBe('---');
      });
      expect(stepServiceSpy.goToStep).toHaveBeenCalledOnceWith(DemoCheckoutStep.BILLING);
    });
  });

  describe('when DemoCompleteBillingStepSuccessAction is triggered', () => {
    let action: DemoCompleteBillingStepSuccess;

    beforeEach(() => {
      action = new DemoCompleteBillingStepSuccess(stubCart);
    });

    it('should go to the review step', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: action });
        helpers.expectObservable(effects.onCompleteBillingStep$).toBe('---');
      });
      expect(stepServiceSpy.goToStep).toHaveBeenCalledOnceWith(DemoCheckoutStep.REVIEW);
    });
  });
});

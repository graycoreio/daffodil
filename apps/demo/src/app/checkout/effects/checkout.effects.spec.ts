import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

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
    let expected;
    let action: DemoCompleteAddressStep;

    beforeEach(() => {
      action = new DemoCompleteAddressStep(mockAddress);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        shippingAddressUpdateSpy.and.returnValue(of(stubCart));
        const successAction = new DemoCompleteAddressStepSuccess(stubCart);
        actions$ = hot('--a', { a: action });
        expected = cold('--b', { b: successAction });
      });

      it('should dispatch a DemoCompleteAddressStepSuccess action', () => {
        expect(effects.completeAddressStep$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCartInvalidAPIResponseError('Failed to list customer address');
        const response = cold('#', {}, error);
        shippingAddressUpdateSpy.and.returnValue(response);
        const failureAction = new DemoCompleteAddressStepFailure([daffTransformErrorToStateError(error)]);
        actions$ = hot('--a', { a: action });
        expected = cold('--b', { b: failureAction });
      });

      it('should dispatch a DemoCompleteAddressStepFailure action', () => {
        expect(effects.completeAddressStep$).toBeObservable(expected);
      });
    });
  });

  describe('when DemoCompleteAddressStepSuccessAction is triggered', () => {
    let expected;
    let action: DemoCompleteAddressStepSuccess;

    beforeEach(() => {
      action = new DemoCompleteAddressStepSuccess(stubCart);
      actions$ = hot('--a', { a: action });
      expected = cold('---');
    });

    it('should go to the shipping step', () => {
      expect(effects.onCompleteAddressStep$).toBeObservable(expected);
      expect(stepServiceSpy.goToStep).toHaveBeenCalledOnceWith(DemoCheckoutStep.SHIPPING);
    });
  });

  describe('when DemoCompleteShippingStepAction is triggered', () => {
    let expected;
    let action: DemoCompleteShippingStep;

    beforeEach(() => {
      action = new DemoCompleteShippingStep(mockShipping);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        shippingUpdateSpy.and.returnValue(of(stubCart));
        const successAction = new DemoCompleteShippingStepSuccess(stubCart);
        actions$ = hot('--a', { a: action });
        expected = cold('--b', { b: successAction });
      });

      it('should dispatch a DemoCompleteShippingStepSuccess action', () => {
        expect(effects.completeShippingStep$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffCartInvalidAPIResponseError('Failed to list customer address');
        const response = cold('#', {}, error);
        shippingUpdateSpy.and.returnValue(response);
        const failureAction = new DemoCompleteShippingStepFailure([daffTransformErrorToStateError(error)]);
        actions$ = hot('--a', { a: action });
        expected = cold('--b', { b: failureAction });
      });

      it('should dispatch a DemoCompleteShippingStepFailure action', () => {
        expect(effects.completeShippingStep$).toBeObservable(expected);
      });
    });
  });

  describe('when DemoCompleteShippingStepSuccessAction is triggered', () => {
    let expected;
    let action: DemoCompleteShippingStepSuccess;

    beforeEach(() => {
      action = new DemoCompleteShippingStepSuccess(stubCart);
      actions$ = hot('--a', { a: action });
      expected = cold('---');
    });

    it('should go to the billing step', () => {
      expect(effects.onCompleteShippingStep$).toBeObservable(expected);
      expect(stepServiceSpy.goToStep).toHaveBeenCalledOnceWith(DemoCheckoutStep.BILLING);
    });
  });

  describe('when DemoCompleteBillingStepSuccessAction is triggered', () => {
    let expected;
    let action: DemoCompleteBillingStepSuccess;

    beforeEach(() => {
      action = new DemoCompleteBillingStepSuccess(stubCart);
      actions$ = hot('--a', { a: action });
      expected = cold('---');
    });

    it('should go to the review step', () => {
      expect(effects.onCompleteBillingStep$).toBeObservable(expected);
      expect(stepServiceSpy.goToStep).toHaveBeenCalledOnceWith(DemoCheckoutStep.REVIEW);
    });
  });
});

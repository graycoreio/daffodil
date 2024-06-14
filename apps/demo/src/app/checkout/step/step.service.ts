import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  filter,
  map,
  take,
  tap,
} from 'rxjs';

import { DaffCartFacade } from '@daffodil/cart/state';

import { DemoCheckoutStep } from './step.enum';

const STEP_ORDER = [
  DemoCheckoutStep.ADDRESS,
  DemoCheckoutStep.SHIPPING,
  DemoCheckoutStep.BILLING,
  DemoCheckoutStep.REVIEW,
];

@Injectable({
  providedIn: 'root',
})
export class DemoCheckoutStepService {
  private _currentStep$ = new BehaviorSubject<DemoCheckoutStep>(STEP_ORDER[0]);

  /**
   * The currently requested step, if the cart has the requirements for it.
   * Otherwise, the latest step for which the cart has requirements.
   */
  currentStep$: Observable<DemoCheckoutStep>;
  /**
   * A mapping of checkout steps to if they have been completed.
   */
  stepCompletion$: Observable<Record<DemoCheckoutStep, boolean>>;

  constructor(
    private cartFacade: DaffCartFacade,
  ) {
    this.currentStep$ = combineLatest([
      this._currentStep$,
      this.cartFacade.hasShippingAddress$,
      this.cartFacade.hasShippingMethod$,
      this.cartFacade.hasBillingAddress$,
      this.cartFacade.hasPaymentMethod$,
    ]).pipe(
      map(([
        currentStep,
        hasShippingAddress,
        hasShippingMethod,
        hasBillingAddress,
        hasPaymentMethod,
      ]) => {
        const deps = {
          [DemoCheckoutStep.ADDRESS]: true,
          [DemoCheckoutStep.SHIPPING]: hasShippingAddress,
          [DemoCheckoutStep.BILLING]: hasShippingAddress && hasShippingMethod,
          [DemoCheckoutStep.REVIEW]: hasShippingAddress
            && hasShippingMethod
            && hasBillingAddress
            && hasPaymentMethod,
        };
        for (let index = STEP_ORDER.indexOf(currentStep); index >= 0; index--) {
          const step = STEP_ORDER[index];
          if (deps[step]) {
            return step;
          }
        }

        return STEP_ORDER[0];
      }),
    );
    this.stepCompletion$ = this.currentStep$.pipe(
      map((currentStep) => STEP_ORDER.indexOf(currentStep)),
      map((currentStepIndex) => STEP_ORDER.reduce((acc, step, i) => {
        acc[step] = i < currentStepIndex;
        return acc;
      }, <Record<DemoCheckoutStep, boolean>>{})),
    );
  }

  nextStep() {
    this.currentStep$.pipe(
      take(1),
      map((currentStep) => STEP_ORDER[STEP_ORDER.indexOf(currentStep) + 1]),
      filter((nextStep) => !!nextStep),
    ).subscribe((nextStep) => {
      this._currentStep$.next(nextStep);
    });
  }

  prevStep() {
    this.currentStep$.pipe(
      take(1),
      map((currentStep) => STEP_ORDER[STEP_ORDER.indexOf(currentStep) - 1]),
      filter((prevStep) => !!prevStep),
    ).subscribe((prevStep) => {
      this._currentStep$.next(prevStep);
    });
  }

  goToStep(step: DemoCheckoutStep) {
    this._currentStep$.next(step);
  }
}

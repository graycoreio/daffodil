import {
  Injectable,
  InjectionToken,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartPaymentServiceInterface,
  DaffCartPaymentDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';
import { DaffPersonalAddress } from '@daffodil/geography';
import {
  DaffPaymentRequest,
  DaffPaymentResponse,
} from '@daffodil/payment';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';
import {
  DaffPaymentGenerateToken,
  DaffPaymentGenerateTokenFailure,
  daffPaymentProvideAvailableProcessors,
} from '@daffodil/payment/state';
import {
  DaffPaymentResponseFactory,
  DaffPaymentTestingModule,
} from '@daffodil/payment/testing';

import { DaffCartPaymentProcessorEffects } from './cart-payment-processor.effects';

const TEST_ACTION = 'test action';

class TestAction implements DaffPaymentGenerateToken {
  type = TEST_ACTION;
  constructor(public request: DaffPaymentRequest, address?: DaffPersonalAddress) {}
}

@Injectable()
class TestDriver implements DaffPaymentDriverInterface {
  generateToken(request: DaffPaymentRequest): Observable<DaffPaymentResponse> {
    return of();
  }
}

const DRIVER_TOKEN = new InjectionToken<TestDriver>('DRIVER_TOKEN');

describe('@daffodil/cart/state | DaffCartPaymentProcessorEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartPaymentProcessorEffects;

  let mockCart: DaffCart;
  let mockCartPayment: DaffCartPaymentMethod;
  let mockCartBillingAddress: DaffCartAddress;
  let paymentResponse: DaffPaymentResponse;

  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;
  let cartAddressFactory: DaffCartAddressFactory;
  let paymentResponseFactory: DaffPaymentResponseFactory;

  let daffPaymentDriver: DaffCartPaymentServiceInterface;
  let daffPaymentService: DaffPaymentDriverInterface;

  let driverUpdateSpy: jasmine.Spy<DaffCartPaymentServiceInterface['update']>;
  let generateTokenSpy: jasmine.Spy<DaffPaymentDriverInterface['generateToken']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
        DaffPaymentTestingModule,
      ],
      providers: [
        DaffCartPaymentProcessorEffects,
        provideMockActions(() => actions$),
        {
          provide: DRIVER_TOKEN,
          useClass: TestDriver,
        },
        ...daffPaymentProvideAvailableProcessors({
          kind: 'TEST',
          action: TEST_ACTION,
          driver: DRIVER_TOKEN,
        }),
      ],
    });

    effects = TestBed.inject(DaffCartPaymentProcessorEffects);

    daffPaymentDriver = TestBed.inject(DaffCartPaymentDriver);
    daffPaymentService = TestBed.inject(DRIVER_TOKEN);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    paymentResponseFactory = TestBed.inject(DaffPaymentResponseFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();
    mockCartBillingAddress = cartAddressFactory.create();
    paymentResponse = paymentResponseFactory.create();

    driverUpdateSpy = spyOn(daffPaymentDriver, 'update');
    generateTokenSpy = spyOn(daffPaymentService, 'generateToken');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });;

  describe('when the injected payment action is triggered', () => {
    let paymentApplyAction: TestAction;
    const method = 'updatedMethod';

    beforeEach(() => {
      mockCartPayment.method = method;
      paymentApplyAction = new TestAction({
        kind: 'TEST',
        data: 'test',
      }, mockCartBillingAddress);
    });

    describe('and the call to the injected payment driver is successful', () => {
      describe('and the call to CartPaymentService is successful', () => {
        it('should dispatch a CartPaymentUpdateSuccess action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            generateTokenSpy.and.returnValue(of(paymentResponse));
            driverUpdateSpy.and.returnValue(of(mockCart));
            const cartPaymentUpdateSuccessAction = new DaffCartPaymentUpdateSuccess(mockCart);
            actions$ = helpers.hot('--a', { a: paymentApplyAction });
            helpers.expectObservable(effects.update$).toBe('--b', { b: cartPaymentUpdateSuccessAction });
          });
        });
      });

      describe('and the call to CartPaymentService fails', () => {
        it('should dispatch a CartPaymentUpdateFailure action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            generateTokenSpy.and.returnValue(of(paymentResponse));
            actions$ = helpers.hot('--a', { a: paymentApplyAction });

            const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart payment' };
            const response = helpers.cold<any>('#', {}, error);
            driverUpdateSpy.and.returnValue(response);
            const cartPaymentUpdateFailureAction = new DaffCartPaymentUpdateFailure([error]);
            helpers.expectObservable(effects.update$).toBe('--b', { b: cartPaymentUpdateFailureAction });
          });
        });
      });
    });

    describe('and the call to the injected payment driver fails', () => {
      it('should dispatch a DaffPaymentGenerateTokenFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to generate token' };
          const response = helpers.cold<any>('#', {}, error);
          generateTokenSpy.and.returnValue(response);
          const failureAction = new DaffPaymentGenerateTokenFailure(error);
          actions$ = helpers.hot('--a', { a: paymentApplyAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: failureAction });
        });
      });
    });
  });
});

import {
  Injectable,
  Inject,
  Injector,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  Observable,
  combineLatest,
  defer,
  of,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartDriverResolveService,
  DaffCartPaymentDriver,
  DaffCartPaymentServiceInterface,
} from '@daffodil/cart/driver';
import {
  DaffError,
  catchAndArrayifyErrors,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffPaymentRequest,
  DaffPaymentResponse,
} from '@daffodil/payment';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';
import {
  DAFF_PAYMENT_PROCESSOR_COLLECTION,
  DaffPaymentProcessorCollection,
  DaffPaymentGenerateToken,
  DaffPaymentGenerateTokenFailure,
  DAFF_PAYMENT_ERROR_MATCHER,
  DaffPaymentGenerateTokenPayload,
} from '@daffodil/payment/state';

import {
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateSuccess,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

/**
 * Performs a payment update on the current cart.
 *
 * @param payload The generate token request.
 * @param deps DI deps.
 * @param cbs Return the actions and/or perform custom behavior in response to each particular case.
 */
export function daffCartPaymentProcessorUpdate<
  Cart extends DaffCart = DaffCart,
  Request extends DaffPaymentRequest = DaffPaymentRequest,
  Response extends DaffPaymentResponse = DaffPaymentResponse,
  Success = unknown,
  PaymentFailure = unknown,
  UpdateFailure = unknown
>(
  payload: DaffPaymentGenerateTokenPayload<Request>,
  deps: {
    cartDriver: DaffCartPaymentServiceInterface<Cart>;
    paymentDriver: DaffPaymentDriverInterface<Response>;
    cartResolver: DaffCartDriverResolveService;
  },
  cbs: {
    success: (resp: Cart) => Observable<Success>;
    paymentFailure: (errors: Array<DaffError>) => Observable<PaymentFailure>;
    updateFailure: (errors: Array<DaffError>) => Observable<UpdateFailure>;
  },
) {
  return defer(() =>
    combineLatest([
      deps.paymentDriver.generateToken(payload.request),
      deps.cartResolver.getCartIdOrFail(),
    ]).pipe(
      switchMap(([response, cartId]) =>
        deps.cartDriver.update(
          cartId,
          {
            method: response.method,
            payment_info: response.data,
          },
        <Cart['billing_address']>payload.address,
        ).pipe(
          switchMap(cbs.success),
          catchAndArrayifyErrors(cbs.updateFailure),
        ),
      ),
      catchAndArrayifyErrors(cbs.paymentFailure),
    ),
  );
}

@Injectable()
export class DaffCartPaymentProcessorEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_PAYMENT_PROCESSOR_COLLECTION) private processors: DaffPaymentProcessorCollection,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DAFF_PAYMENT_ERROR_MATCHER) private paymentErrorMatcher: ErrorTransformer,
    @Inject(DaffCartPaymentDriver) private driver: DaffCartPaymentServiceInterface<T>,
    private cartResolver: DaffCartDriverResolveService<T>,
    private injector: Injector,
  ) {}

  update$ = createEffect(() => this.actions$.pipe(
    ofType(
      ...Object.values(this.processors).map(({ action }) => action),
    ),
    switchMap((action: DaffPaymentGenerateToken) =>
      // create a new inner observable to prevent the effects obs
      // from completing on outer catch error
      daffCartPaymentProcessorUpdate(
        action,
        {
          paymentDriver: this.injector.get(this.processors[action.request.kind].driver),
          cartDriver: this.driver,
          cartResolver: this.cartResolver,
        },
        {
          success: (resp) => of(new DaffCartPaymentUpdateSuccess(resp)),
          paymentFailure: (errors) => of(new DaffPaymentGenerateTokenFailure(this.paymentErrorMatcher(errors[0]))),
          updateFailure: (errors) => of(new DaffCartPaymentUpdateFailure(errors.map(this.errorMatcher))),
        },
      ),
    ),
  ));
}

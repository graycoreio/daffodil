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
  defer,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffCartPaymentMethod,
  DaffCart,
  DaffCartAddress,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartPaymentDriver,
  DaffCartPaymentServiceInterface,
} from '@daffodil/cart/driver';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffPaymentResponse } from '@daffodil/payment';
import {
  DAFF_PAYMENT_PROCESSOR_COLLECTION,
  DaffPaymentProcessorCollection,
  DaffPaymentGenerateToken,
  DaffPaymentGenerateTokenFailure,
  DAFF_PAYMENT_ERROR_MATCHER,
} from '@daffodil/payment/state';

import {
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateSuccess,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartPaymentProcessorEffects<
  T extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  V extends DaffCart = DaffCart,
  R extends DaffCartAddress = DaffCartAddress,
> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_PAYMENT_PROCESSOR_COLLECTION) private processors: DaffPaymentProcessorCollection,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DAFF_PAYMENT_ERROR_MATCHER) private paymentErrorMatcher: ErrorTransformer,
    @Inject(DaffCartPaymentDriver) private driver: DaffCartPaymentServiceInterface<T, V, R>,
    private storage: DaffCartStorageService,
    private injector: Injector,
  ) {}

  update$ = createEffect(() => this.actions$.pipe(
    ofType(
      ...Object.values(this.processors).map(({ action }) => action),
    ),
    switchMap((action: DaffPaymentGenerateToken) =>
      // create a new inner observable to prevent the effects obs
      // from completing on outer catch error
      defer(() =>
        this.injector.get(this.processors[action.request.kind].driver).generateToken(action.request).pipe(
          map(e => [e, action]),
          switchMap(([response, act]: [DaffPaymentResponse<any>, DaffPaymentGenerateToken]) =>
            this.driver.update(this.storage.getCartId(), <T>{
              method: response.method,
              payment_info: response.data,
            }, <R>act.address).pipe(
              map((resp: V) => new DaffCartPaymentUpdateSuccess(resp)),
              catchAndArrayifyErrors(error => of(new DaffCartPaymentUpdateFailure(error.map(this.errorMatcher)))),
            ),
          ),
          catchAndArrayifyErrors(error => of(new DaffPaymentGenerateTokenFailure(this.paymentErrorMatcher(error[0])))),
        ),
      ),
    ),
  ));
}

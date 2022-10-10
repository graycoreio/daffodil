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
import { of } from 'rxjs';
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
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartPaymentDriver,
  DaffCartPaymentServiceInterface,
} from '@daffodil/cart/driver';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffPaymentResponse,
  DAFF_PAYMENT_ERROR_MATCHER,
} from '@daffodil/payment';
import {
  DAFF_PAYMENT_PROCESSOR_COLLECTION,
  DaffPaymentProcessorCollection,
  DaffPaymentGenerateToken,
  DaffPaymentGenerateTokenFailure,
} from '@daffodil/payment/state';

import {
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateSuccess,
} from '../actions/public_api';

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
      of(null).pipe(
        switchMap(() =>
          this.injector.get(this.processors[action.request.kind].driver).generateToken(action.request).pipe(
            map(e => [e, action]),
            switchMap(([response, act]: [DaffPaymentResponse<any>, DaffPaymentGenerateToken]) =>
              this.driver.update(this.storage.getCartId(), <T>{
                method: response.method,
                payment_info: response.data,
              }, <R>act.address).pipe(
                map((resp: V) => new DaffCartPaymentUpdateSuccess(resp)),
                catchError(error => of(new DaffCartPaymentUpdateFailure(this.errorMatcher(error)))),
              ),
            ),
            catchError(error => of(new DaffPaymentGenerateTokenFailure(this.paymentErrorMatcher(error)))),
          )),
      ),
    ),
  ));
}

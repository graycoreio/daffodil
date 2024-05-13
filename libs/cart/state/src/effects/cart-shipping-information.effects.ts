import {
  Injectable,
  Inject,
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
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingInformationDriver,
  DaffCartShippingInformationServiceInterface,
} from '@daffodil/cart/driver';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartShippingInformationActionTypes,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingInformationDeleteSuccess,
  DaffCartShippingInformationDeleteFailure,
  DaffCartShippingInformationUpdateSuccess,
  DaffCartShippingInformationUpdateFailure,
  DaffCartShippingInformationActions,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartShippingInformationEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions<DaffCartShippingInformationActions<T['shipping_information']>>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartShippingInformationDriver) private driver: DaffCartShippingInformationServiceInterface<T['shipping_information']>,
    private storage: DaffCartStorageService,
  ) {}


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction),
    switchMap((action) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp) => new DaffCartShippingInformationLoadSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartShippingInformationLoadFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));


  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction),
    switchMap((action) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp) => new DaffCartShippingInformationUpdateSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartShippingInformationUpdateFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));


  delete$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction),
    switchMap((action) =>
      this.driver.delete(this.storage.getCartId()).pipe(
        map((resp) => new DaffCartShippingInformationDeleteSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartShippingInformationDeleteFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));
}

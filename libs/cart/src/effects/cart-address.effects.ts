import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, combineLatest } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffCartAddressActionTypes,
  DaffCartAddressUpdate,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
  DaffCartStorageFailure,
} from '../actions/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartAddress } from '../models/cart-address';
import { DaffCartShippingAddressServiceInterface, DaffCartShippingAddressDriver } from '../drivers/interfaces/cart-shipping-address-service.interface';
import { DaffCartBillingAddressServiceInterface, DaffCartBillingAddressDriver } from '../drivers/interfaces/cart-billing-address-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffStorageServiceError } from '@daffodil/core';

@Injectable()
export class DaffCartAddressEffects<
  T extends DaffCartAddress = DaffCartAddress,
  V extends DaffCart = DaffCart
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartShippingAddressDriver) private shippingAddressDriver: DaffCartShippingAddressServiceInterface<T, V>,
    @Inject(DaffCartBillingAddressDriver) private billingAddressDriver: DaffCartBillingAddressServiceInterface<T, V>,
    private storage: DaffCartStorageService
  ) {}

  /**
   * Updates both the shipping and billing address of the cart.
   */
  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartAddressActionTypes.CartAddressUpdateAction),
    switchMap((action: DaffCartAddressUpdate<T>) => combineLatest(
      this.shippingAddressDriver.update(this.storage.getCartId(), action.payload),
      this.billingAddressDriver.update(this.storage.getCartId(), action.payload)
    )),
    map(([shippingResponse, billingResponse]) => new DaffCartAddressUpdateSuccess({
      ...shippingResponse,
      ...billingResponse,
      shipping_address: shippingResponse.shipping_address,
      billing_address: billingResponse.billing_address
    })),
    catchError(error => of(error instanceof DaffStorageServiceError
      ? new DaffCartStorageFailure()
      : new DaffCartAddressUpdateFailure('Failed to update cart address')
    ))
  )
}

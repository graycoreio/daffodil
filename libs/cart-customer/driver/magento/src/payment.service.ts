import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartPaymentService } from '@daffodil/cart/driver/magento';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'any',
})
export class DaffMagentoCartCustomerPaymentService implements DaffCartPaymentServiceInterface {
  constructor(
    private authStorage: DaffAuthStorageService,
    private guestDriver: DaffMagentoCartPaymentService,
  ) {}

  get(cartId: string): Observable<DaffCartPaymentMethod> {
    return this.guestDriver.get(cartId);
  }

  remove(cartId: string): Observable<void> {
    return this.guestDriver.remove(cartId);
  }

  update(
    cartId: DaffCart['id'],
    payment: Partial<DaffCartPaymentMethod>,
    billingAddress?: Partial<DaffCartAddress>,
  ): Observable<Partial<DaffCart>> {
    if(!billingAddress){
      return this.guestDriver.update(cartId, payment);
    }

    const { email: _, ...addressWithoutEmail } = billingAddress || {};

    return this.guestDriver.update(cartId, payment, this.authStorage.getAuthToken() ? addressWithoutEmail : billingAddress);
  }

  updateWithBilling(
    cartId: DaffCart['id'],
    payment: Partial<DaffCartPaymentMethod>,
    address: Partial<DaffCartAddress>,
  ): Observable<Partial<DaffCart>> {
    const { email: _, ...addressWithoutEmail } = address;

    return this.guestDriver.updateWithBilling(cartId, payment, this.authStorage.getAuthToken() ? addressWithoutEmail : address);
  }
}

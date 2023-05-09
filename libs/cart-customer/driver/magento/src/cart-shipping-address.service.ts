import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartShippingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartShippingAddressService } from '@daffodil/cart/driver/magento';

/**
 * A service for making Magento GraphQL queries for a cart's shipping address.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartCustomerShippingAddressService implements DaffCartShippingAddressServiceInterface {
  constructor(
    private authStorage: DaffAuthStorageService,
    private driver: DaffMagentoCartShippingAddressService,
  ) {}

  get(cartId: DaffCart['id']): Observable<DaffCartAddress> {
    return this.driver.get(cartId);
  }

  update(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    const { email: _, ...addressWithoutEmail } = address;

    return this.driver.update(cartId, this.authStorage.getAuthToken() ? addressWithoutEmail : address);
  }
}

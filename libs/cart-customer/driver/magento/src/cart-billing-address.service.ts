import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartBillingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartBillingAddressService } from '@daffodil/cart/driver/magento';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartCustomerBillingAddressService implements DaffCartBillingAddressServiceInterface {
  constructor(
    private authStorage: DaffAuthStorageService,
    private driver: DaffMagentoCartBillingAddressService,
  ) {}

  get(cartId: DaffCart['id']): Observable<DaffCartAddress> {
    return this.driver.get(cartId);
  }

  update(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    if (this.authStorage.getAuthToken()) {
      delete address.email;
    }

    return this.driver.update(cartId, address);
  }
}

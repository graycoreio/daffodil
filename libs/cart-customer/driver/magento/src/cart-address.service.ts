import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartAddressService } from '@daffodil/cart/driver/magento';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'any',
})
export class DaffMagentoCartCustomerAddressService implements DaffCartAddressServiceInterface {
  constructor(
    private authStorage: DaffAuthStorageService,
    private driver: DaffMagentoCartAddressService,
  ) {}

  update(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    const { email: _, ...addressWithoutEmail } = address;

    return this.driver.update(cartId, this.authStorage.getAuthToken() ? addressWithoutEmail : address);
  }
}

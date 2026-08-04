import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import { DaffCheckoutOrderServiceInterface } from '@daffodil/checkout/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCheckoutTestingOrderService implements DaffCheckoutOrderServiceInterface {
  placeOrder(cartId: DaffCart['id']): Observable<DaffCheckoutOrderResult> {
    return of({
      id: faker.string.uuid(),
      orderId: faker.string.uuid(),
      cartId,
    });
  }
}

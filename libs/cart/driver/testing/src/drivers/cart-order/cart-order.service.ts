import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartOrderResult,
} from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingCartOrderService implements DaffCartOrderServiceInterface {
  placeOrder(cartId: DaffCart['id'], payment?: DaffCartPaymentMethod): Observable<DaffCartOrderResult> {
    return of({
      id: faker.string.uuid(),
      orderId: faker.string.uuid(),
      cartId,
    });
  }
}

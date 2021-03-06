import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
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

@Injectable({
  providedIn: 'root',
})
export class DaffTestingCartOrderService implements DaffCartOrderServiceInterface {
  placeOrder(cartId: DaffCart['id'], payment?: DaffCartPaymentMethod): Observable<DaffCartOrderResult> {
    return of({
      id: faker.random.uuid(),
      orderId: faker.random.uuid(),
      cartId,
    });
  }
}

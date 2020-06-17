import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as faker from 'faker/locale/en_US';

import {
  DaffCart,
  DaffCartOrderServiceInterface,
  DaffCartPaymentMethod,
  DaffCartOrderResult
} from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartOrderService implements DaffCartOrderServiceInterface {
  placeOrder(cartId: DaffCart['id'], payment?: DaffCartPaymentMethod): Observable<DaffCartOrderResult> {
    return of({id: faker.random.number(999999)});
  }
}

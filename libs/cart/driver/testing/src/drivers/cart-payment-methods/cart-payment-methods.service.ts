import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface {
  constructor(
    private paymentFactory: DaffCartPaymentFactory,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]> {
    return of(this.paymentFactory.createMany(3));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffCartPaymentMethodsServiceInterface,
  DaffCartPaymentMethod,
  DaffCart
} from '@daffodil/cart';

import { DaffCartPaymentFactory } from '../../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface<DaffCartPaymentMethod> {
  constructor(
    private paymentFactory: DaffCartPaymentFactory,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]> {
    return of(this.paymentFactory.createMany(3));
  }
}

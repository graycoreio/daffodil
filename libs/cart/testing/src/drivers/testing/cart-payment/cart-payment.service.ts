import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartPaymentServiceInterface,
  DaffCartAddress
} from '@daffodil/cart';

import { DaffCartFactory, DaffCartPaymentFactory } from '../../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartPaymentService implements DaffCartPaymentServiceInterface {
  constructor(
    private paymentFactory: DaffCartPaymentFactory,
    private cartFactory: DaffCartFactory
  ) {}

  get(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod> {
    return of(this.paymentFactory.create());
  }

  update(cartId: DaffCart['id'], payment: Partial<DaffCartPaymentMethod>): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }

  updateWithBilling(cartId: DaffCart['id'], payment: Partial<DaffCartPaymentMethod>, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }

  remove(cartId: DaffCart['id']): Observable<void> {
    return of(undefined);
  }
}

import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffCustomerPayment } from '@daffodil/customer-payment';
import { DaffCustomerPaymentDriverInterface } from '@daffodil/customer-payment/driver';
import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';
import { DaffPaymentRequest } from '@daffodil/payment';

/**
 * A basic customer driver that creates mock customer results of different kinds.
 * For testing purposes.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentTestingDriver implements DaffCustomerPaymentDriverInterface {
  constructor(
    private factory: DaffCustomerPaymentFactory,
  ) {}

  list(): Observable<DaffCustomerPayment[]> {
    return of(this.factory.createMany(3));
  }

  get(paymentId: string): Observable<DaffCustomerPayment> {
    return of(this.factory.create({ id: paymentId }));
  }

  update(payment: Partial<DaffCustomerPayment> & DaffIdentifiable): Observable<DaffCustomerPayment[]> {
    return of(this.factory.createMany(3));
  }

  add(payment: DaffPaymentRequest): Observable<DaffCustomerPayment[]> {
    return of(this.factory.createMany(3));
  }

  delete(paymentId: string): Observable<DaffCustomerPayment[]> {
    return of(this.factory.createMany(3));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffCustomerPayment } from '@daffodil/customer-payment';
import { DaffCustomerPaymentDriverInterface } from '@daffodil/customer-payment/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import { DaffPaymentRequest } from '@daffodil/payment';

import { DAFF_CUSTOMER_PAYMENT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * The customer payment in-memory driver to mock the customer payment backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentInMemoryDriver extends DaffInMemoryDriverBase implements DaffCustomerPaymentDriverInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CUSTOMER_PAYMENT_IN_MEMORY_COLLECTION_NAME);
  }

  list(): Observable<DaffCustomerPayment[]> {
    return this.http.get<DaffCustomerPayment[]>(this.url);
  }

  get(paymentId: string): Observable<DaffCustomerPayment> {
    return this.http.get<DaffCustomerPayment>(`${this.url}/${paymentId}`);
  }

  update(payment: Partial<DaffCustomerPayment> & DaffIdentifiable): Observable<DaffCustomerPayment[]> {
    return this.http.put<DaffCustomerPayment[]>(`${this.url}/${payment.id}`, payment);
  }

  add(payment: DaffPaymentRequest): Observable<DaffCustomerPayment[]> {
    return this.http.post<DaffCustomerPayment[]>(this.url, payment);
  }

  delete(paymentId: string): Observable<DaffCustomerPayment[]> {
    return this.http.delete<DaffCustomerPayment[]>(`${this.url}/${paymentId}`);
  }
}

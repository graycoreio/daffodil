import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import {
  DaffPaymentRequest,
  DaffPaymentResponse,
} from '@daffodil/payment';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';

import { DAFF_PAYMENT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * The payment inmemory driver to mock the payment backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaymentInMemoryDriver extends DaffInMemoryDriverBase implements DaffPaymentDriverInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_PAYMENT_IN_MEMORY_COLLECTION_NAME);
  }

  generateToken(request: DaffPaymentRequest): Observable<DaffPaymentResponse> {
    return this.http.get<DaffPaymentResponse>(this.url);
  }
}

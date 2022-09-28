import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffPaymentRequest,
  DaffPaymentResponse,
} from '@daffodil/payment';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';

/**
 * The payment inmemory driver to mock the payment backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaymentInMemoryDriver implements DaffPaymentDriverInterface {
  /**
   * @docs-private
   */
  url = '/api/payment';

  constructor(
    private http: HttpClient,
  ) {}

  generateToken(request: DaffPaymentRequest): Observable<DaffPaymentResponse> {
    return this.http.get<DaffPaymentResponse>(this.url);
  }
}

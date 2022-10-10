import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';
import { DaffPaypalExpressServiceInterface } from '@daffodil/paypal/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryPaypalService implements DaffPaypalExpressServiceInterface<DaffPaypalExpressTokenRequest, DaffPaypalExpressTokenResponse> {
  url = '/api/paypal/';

  constructor(private http: HttpClient) {}

  generateToken(cartId: string, tokenRequest: DaffPaypalExpressTokenRequest): Observable<DaffPaypalExpressTokenResponse> {
    return this.http.get<DaffPaypalExpressTokenResponse>(this.url);
  }
}

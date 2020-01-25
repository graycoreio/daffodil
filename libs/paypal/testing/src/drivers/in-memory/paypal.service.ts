import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffPaypalServiceInterface, DaffPaypalTokenRequest, DaffPaypalTokenResponse } from '@daffodil/paypal';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryPaypalService implements DaffPaypalServiceInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse> {
  url = '/api/paypal/';

  constructor(private http: HttpClient) {}

  generateToken(tokenRequest: DaffPaypalTokenRequest): Observable<DaffPaypalTokenResponse> {
    return this.http.get<DaffPaypalTokenResponse>(this.url + tokenRequest.cartId);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffPaypalTokenRequest, DaffPaypalTokenResponse, DaffPaypalServiceInterface } from '@daffodil/paypal';

import { DaffPaypalTokenResponseFactory } from '../../factories/paypal-token-response.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingPaypalService implements DaffPaypalServiceInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse> {
 
  constructor(
    private paypalTokenResponseFactory: DaffPaypalTokenResponseFactory) {}

  generateToken(tokenRequest: DaffPaypalTokenRequest): Observable<DaffPaypalTokenResponse> {
    return of(this.paypalTokenResponseFactory.create());
  }
}

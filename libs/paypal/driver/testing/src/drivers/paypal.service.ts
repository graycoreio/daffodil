import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';
import { DaffPaypalExpressServiceInterface } from '@daffodil/paypal/driver';
import { DaffPaypalExpressTokenResponseFactory } from '@daffodil/paypal/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingPaypalService implements DaffPaypalExpressServiceInterface<DaffPaypalExpressTokenRequest, DaffPaypalExpressTokenResponse> {

  constructor(
    private paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory) {}

  generateToken(cartId: string, tokenRequest: DaffPaypalExpressTokenRequest): Observable<DaffPaypalExpressTokenResponse> {
    return of(this.paypalTokenResponseFactory.create());
  }
}

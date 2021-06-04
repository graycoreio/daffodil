import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffPaypalTokenRequest,
  DaffPaypalTokenResponse,
} from '@daffodil/paypal';
import { DaffPaypalServiceInterface } from '@daffodil/paypal/driver';
import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingPaypalService implements DaffPaypalServiceInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse> {

  constructor(
    private paypalTokenResponseFactory: DaffPaypalTokenResponseFactory) {}

  generateToken(tokenRequest: DaffPaypalTokenRequest): Observable<DaffPaypalTokenResponse> {
    return of(this.paypalTokenResponseFactory.create());
  }
}

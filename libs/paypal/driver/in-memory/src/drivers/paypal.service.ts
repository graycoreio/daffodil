import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';
import { DaffPaypalExpressServiceInterface } from '@daffodil/paypal/driver';

import { DAFF_PAYPAL_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryPaypalService extends DaffInMemoryDriverBase implements DaffPaypalExpressServiceInterface<DaffPaypalExpressTokenRequest, DaffPaypalExpressTokenResponse> {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_PAYPAL_IN_MEMORY_COLLECTION_NAME);
  }

  generateToken(cartId: string, tokenRequest: DaffPaypalExpressTokenRequest): Observable<DaffPaypalExpressTokenResponse> {
    return this.http.get<DaffPaypalExpressTokenResponse>(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffAuthorizeNetService } from '@daffodil/authorizenet/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_AUTHORIZE_NET_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryAuthorizeNetService extends DaffInMemoryDriverBase implements DaffAuthorizeNetService<DaffAuthorizeNetTokenRequest> {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_AUTHORIZE_NET_IN_MEMORY_COLLECTION_NAME);
  }

  generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): Observable<any> {
    return this.http.post<DaffAuthorizeNetTokenRequest>(this.url + '/generateToken', paymentTokenRequest);
  }
}

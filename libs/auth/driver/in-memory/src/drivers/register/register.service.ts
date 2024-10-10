import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import { DaffAccountRegistration } from '@daffodil/auth';
import { DaffRegisterServiceInterface } from '@daffodil/auth/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_AUTH_IN_MEMORY_COLLECTION_NAME } from '../../collection-name.const';
import { DaffInMemoryLoginService } from '../login/login.service';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryRegisterService extends DaffInMemoryDriverBase implements DaffRegisterServiceInterface {
  constructor(
    private http: HttpClient,
    private loginService: DaffInMemoryLoginService,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_AUTH_IN_MEMORY_COLLECTION_NAME);
  }

  register(registration: DaffAccountRegistration): Observable<string> {
    return this.registerOnly(registration).pipe(
      switchMap(() => this.loginService.login({ email: registration.email, password: registration.password })),
      map(({ token }) => token),
    );
  }

  registerOnly(registration: DaffAccountRegistration): Observable<void> {
    return this.http.post<void>(`${this.url}/register`, registration);
  }
}

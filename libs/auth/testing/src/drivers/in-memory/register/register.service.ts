import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';

import {
  DaffLoginDriver,
  DaffRegisterServiceInterface,
  DaffLoginServiceInterface,
  DaffCustomerRegistration,
  DaffAccountRegistration,
  DaffAuthToken,
  DaffLoginInfo
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryRegisterService implements DaffRegisterServiceInterface<
  DaffAccountRegistration,
  DaffAuthToken
> {
  url = '/api/auth/';

  constructor(
    private http: HttpClient,
    @Inject(DaffLoginDriver) private loginDriver: DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken>
  ) {}

  register(registration: DaffAccountRegistration): Observable<DaffAuthToken> {
    return this.http.post<DaffCustomerRegistration>(`${this.url}register`, registration).pipe(
      mergeMapTo(
        this.loginDriver.login({
          email: registration.customer.email,
          password: registration.password
        })
      )
    );
  }
}

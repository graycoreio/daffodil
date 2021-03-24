import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import {
  DaffCustomerRegistration,
  DaffAccountRegistration,
  DaffLoginInfo,
} from '@daffodil/auth';
import { DaffRegisterServiceInterface } from '@daffodil/auth/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryRegisterService implements DaffRegisterServiceInterface<
  DaffAccountRegistration,
  DaffLoginInfo
> {
  url = '/api/auth/';

  constructor(
    private http: HttpClient,
  ) {}

  register(registration: DaffAccountRegistration): Observable<DaffLoginInfo> {
    return this.http.post<DaffCustomerRegistration>(`${this.url}register`, registration).pipe(
      mapTo({
        email: registration.customer.email,
        password: registration.password,
      }),
    );
  }
}

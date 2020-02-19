import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import {
  DaffRegisterServiceInterface,
  DaffCustomerRegistration,
  DaffAccountRegistration,
  DaffLoginInfo
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
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
        password: registration.password
      })
    );
  }
}

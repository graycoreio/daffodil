import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';

import {
  DaffLoginDriver,
  DaffRegisterServiceInterface,
  DaffLoginServiceInterface,
  DaffRegisterRequest,
  DaffRegisterResponse,
  DaffLoginRequest,
  DaffLoginResponse
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryRegisterService implements DaffRegisterServiceInterface<DaffRegisterRequest, DaffRegisterResponse> {
  url = '/api/auth/';

  constructor(
    private http: HttpClient,
    @Inject(DaffLoginDriver) private loginDriver: DaffLoginServiceInterface<DaffLoginRequest, DaffLoginResponse>
  ) {}

  register(registration: DaffRegisterRequest): Observable<DaffRegisterResponse> {
    return this.http.post<any>(`${this.url}register`, registration).pipe(
      mergeMapTo(
        this.loginDriver.login({
          email: registration.customer.email,
          password: registration.password
        })
      )
    );
  }
}

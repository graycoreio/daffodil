import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import { DaffAccountRegistration } from '@daffodil/auth';
import { DaffRegisterServiceInterface } from '@daffodil/auth/driver';

import { DaffInMemoryLoginService } from '../login/login.service';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryRegisterService implements DaffRegisterServiceInterface {
  url = '/api/auth/';

  constructor(
    private http: HttpClient,
    private loginService: DaffInMemoryLoginService,
  ) {}

  register(registration: DaffAccountRegistration): Observable<string> {
    return this.registerOnly(registration).pipe(
      switchMap(() => this.loginService.login({ email: registration.email, password: registration.password })),
      map(({ token }) => token),
    );
  }

  registerOnly(registration: DaffAccountRegistration): Observable<void> {
    return this.http.post<void>(`${this.url}register`, registration);
  }
}

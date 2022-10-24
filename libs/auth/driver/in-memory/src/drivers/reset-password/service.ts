import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffResetPasswordServiceInterface } from '@daffodil/auth/driver';

import { DaffInMemoryLoginService } from '../login/login.service';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryResetPasswordService implements DaffResetPasswordServiceInterface {
  url = '/api/auth/';

  constructor(
    private http: HttpClient,
    private loginService: DaffInMemoryLoginService,
  ) {}

  resetPassword(info: DaffAuthResetPasswordInfo): Observable<string> {
    return this.resetPasswordOnly(info).pipe(
      switchMap(() => this.loginService.login({ email: info.email, password: info.password })),
      map(({ token }) => token),
    );
  }

  resetPasswordOnly(info: DaffAuthResetPasswordInfo): Observable<void> {
    return this.http.post<void>(`${this.url}resetPassword`, info);
  }

  sendResetEmail(email: string): Observable<void> {
    return this.http.post<void>(`${this.url}sendResetEmail`, { email });
  }
}

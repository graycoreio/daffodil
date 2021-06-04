import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';
import { DaffLoginServiceInterface } from '@daffodil/auth/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
  url = '/api/auth/';

  constructor(private http: HttpClient) {}

  login(request: DaffLoginInfo): Observable<DaffAuthToken> {
    return this.http.post<DaffAuthToken>(`${this.url}login`, request);
  }

  logout(): Observable<void> {
    return this.http.post<{success: boolean}>(`${this.url}logout`, {}).pipe(
      switchMap(({ success }) => success ? of(undefined) : throwError(new Error('Logout failed'))),
    );
  }
}

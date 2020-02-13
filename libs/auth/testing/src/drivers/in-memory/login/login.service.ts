import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {
  DaffLoginServiceInterface,
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
  url = '/api/auth/';

  constructor(private http: HttpClient) {}

  login(request: DaffLoginInfo): Observable<DaffAuthToken> {
    return this.http.post<DaffAuthToken>(`${this.url}login`, request);
  }

  logout(): Observable<boolean> {
    return this.http.post<{success: boolean}>(`${this.url}logout`, {}).pipe(
      map(({success}) => success)
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffLoginServiceInterface,
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
  url = '/api/auth/';

  constructor(private http: HttpClient) {}

  login(request: DaffLoginInfo): Observable<DaffAuthToken> {
    return this.http.post<DaffAuthToken>(`${this.url}login`, request);
  }
}

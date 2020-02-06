import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffLoginServiceInterface,
  DaffLoginRequest,
  DaffLoginResponse
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryLoginService implements DaffLoginServiceInterface<DaffLoginRequest, DaffLoginResponse> {
  url = '/api/auth/';

  constructor(private http: HttpClient) {}

  login(request: DaffLoginRequest): Observable<DaffLoginResponse> {
    return this.http.post<DaffLoginResponse>(`${this.url}login`, request);
  }
}

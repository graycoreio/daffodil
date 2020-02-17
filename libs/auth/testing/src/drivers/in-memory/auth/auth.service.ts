import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffAuthServiceInterface,
  DaffAuthToken,
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryAuthService implements DaffAuthServiceInterface<DaffAuthToken> {
  url = '/api/auth/';

  constructor(private http: HttpClient) {}

  check(request: DaffAuthToken): Observable<boolean> {
    return this.http.post<{valid: boolean}>(`${this.url}check`, request).pipe(
      map(({valid}) => valid)
    );
  }
}

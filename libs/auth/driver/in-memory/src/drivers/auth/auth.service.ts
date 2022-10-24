import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffAuthServiceInterface } from '@daffodil/auth/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryAuthService implements DaffAuthServiceInterface {
  url = '/api/auth/';

  constructor(private http: HttpClient) {}

  check(): Observable<void> {
    return this.http.post(`${this.url}check`, {}).pipe(
      map(() => undefined),
    );
  }
}

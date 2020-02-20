import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import {
  DaffAuthServiceInterface,
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryAuthService implements DaffAuthServiceInterface {
  url = '/api/auth/';

  constructor(private http: HttpClient) {}

  check(): Observable<void> {
    return this.http.post(`${this.url}check`, {}).pipe(
      mapTo(undefined)
    );
  }
}

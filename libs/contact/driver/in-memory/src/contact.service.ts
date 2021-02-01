import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffContactUnion } from '@daffodil/contact';
import { DaffContactServiceInterface } from '@daffodil/contact/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryContactService implements DaffContactServiceInterface<DaffContactUnion, DaffContactUnion>{

  url = '/api/contact';
  constructor(private http: HttpClient) {}

  send(payload: DaffContactUnion): Observable<DaffContactUnion> {
    return this.http.post<DaffContactUnion>(this.url, payload);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffContactServiceInterface, DaffContactUnion } from '@daffodil/contact';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryContactService implements DaffContactServiceInterface<DaffContactUnion, DaffContactUnion>{
  
  url = '/api/contact';
  constructor(private http: HttpClient) {}

  send(payload: DaffContactUnion): Observable<DaffContactUnion> {
    return this.http.post<DaffContactUnion>(this.url, payload);
  }
}
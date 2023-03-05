import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  DaffContactServiceInterface,
  DaffContactResponse,
} from '@daffodil/contact/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryContactService implements DaffContactServiceInterface {

  url = '/api/contact';
  constructor(private http: HttpClient) {}

  send(payload) {
    return this.http.post<DaffContactResponse>(this.url, payload);
  }
}

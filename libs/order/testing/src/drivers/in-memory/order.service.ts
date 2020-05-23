import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffOrder,
  DaffOrderServiceInterface,
} from '@daffodil/order';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryOrderService implements DaffOrderServiceInterface<DaffOrder> {
  url = '/api/orders';

  constructor(private http: HttpClient) {}

  get(orderId: DaffOrder['id']): Observable<DaffOrder> {
    return this.http.get<DaffOrder>(`${this.url}/${orderId}`);
  }

  list(): Observable<DaffOrder[]> {
    return this.http.get<DaffOrder[]>(`${this.url}/`);
  }
}

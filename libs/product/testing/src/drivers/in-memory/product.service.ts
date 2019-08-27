import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffProduct, DaffProductServiceInterface, DaffProductUnion } from '@daffodil/product';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryProductService implements DaffProductServiceInterface<DaffProductUnion> {
  url = '/api/products/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DaffProductUnion[]> {
    return this.http.get<DaffProduct[]>(this.url);
  }

  getBestSellers(): Observable<DaffProductUnion[]> {
    return this.http.get<DaffProduct[]>(this.url + 'best-sellers');
  }

  get(productId: string): Observable<DaffProductUnion> {
    return this.http.get<DaffProduct>(this.url + productId);
  }
}

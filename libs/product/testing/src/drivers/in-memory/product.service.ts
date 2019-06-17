import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffProduct, DaffProductServiceInterface } from '@daffodil/product';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryProductService implements DaffProductServiceInterface {
  url = '/api/products/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DaffProduct[]> {
    return this.http.get<DaffProduct[]>(this.url);
  }

  getBestSellers(): Observable<DaffProduct[]> {
    return this.http.get<DaffProduct[]>(this.url + 'best-sellers');
  }

  get(productId: string): Observable<DaffProduct> {
    return this.http.get<DaffProduct>(this.url + productId);
  }
}

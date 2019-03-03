import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product, DaffProductServiceInterface } from '@daffodil/product';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryProductService implements DaffProductServiceInterface {
  url = '/api/products/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getBestSellers(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'best-sellers');
  }

  get(productId: string): Observable<Product> {
    return this.http.get<Product>(this.url + productId);
  }
}

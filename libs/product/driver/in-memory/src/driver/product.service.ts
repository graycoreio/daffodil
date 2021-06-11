import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductServiceInterface } from '@daffodil/product/driver';

/**
 * The product inmemory driver to mock the product backend service.
 *
 * @inheritdoc
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryProductService implements DaffProductServiceInterface {
  /**
   * @docs-private
   */
  url = '/api/products/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DaffProduct[]> {
    return this.http.get<DaffProduct[]>(this.url);
  }

  getBestSellers(): Observable<DaffProduct[]> {
    return this.http.get<DaffProduct[]>(this.url + 'best-sellers');
  }

  get(productId: DaffProduct['id']): Observable<DaffProduct> {
    return this.http.get<DaffProduct>(this.url + productId);
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProduct> {
    return this.http.get<DaffProduct>(`${this.url}${url}`);
  }
}

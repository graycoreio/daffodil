import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { daffArrayToDict } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

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

  get(productId: DaffProduct['id']): Observable<DaffProductDriverResponse> {
    return this.http.get<DaffProduct>(this.url + productId).pipe(
      map(product => ({
        id: productId,
        products: daffArrayToDict([product], p => p.id),
      })),
    );
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse> {
    return this.http.get<DaffProduct>(`${this.url}${url}`).pipe(
      map(product => ({
        id: product.id,
        products: daffArrayToDict([product], p => p.id),
      })),
    );
  }
}

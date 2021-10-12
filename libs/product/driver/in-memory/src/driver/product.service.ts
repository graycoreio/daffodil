import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import { DAFF_PRODUCT_IN_MEMORY_PRODUCT_RESPONSE_TRANSFORM } from '../injection-tokens/public_api';
import { DaffInMemoryProductResponseTransform } from '../interfaces/public_api';

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
  url = '/api/products';

  constructor(
    private http: HttpClient,
    @Inject(DAFF_PRODUCT_IN_MEMORY_PRODUCT_RESPONSE_TRANSFORM) private transform: DaffInMemoryProductResponseTransform,
  ) {}

  getAll(): Observable<DaffProduct[]> {
    return this.http.get<DaffProduct[]>(this.url);
  }

  getBestSellers(): Observable<DaffProduct[]> {
    return this.http.get<DaffProduct[]>(`${this.url}/best-sellers`);
  }

  get(productId: DaffProduct['id']): Observable<DaffProductDriverResponse> {
    return this.http.get<DaffProduct>(`${this.url}/${productId}`).pipe(
      map(this.transform),
    );
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse> {
    return this.http.get<DaffProduct>(`${this.url}${url}`).pipe(
      map(this.transform),
    );
  }
}

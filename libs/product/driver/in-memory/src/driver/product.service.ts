import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import { DAFF_PRODUCT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';
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
export class DaffInMemoryProductService extends DaffInMemoryDriverBase implements DaffProductServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
    @Inject(DAFF_PRODUCT_IN_MEMORY_PRODUCT_RESPONSE_TRANSFORM) private transform: DaffInMemoryProductResponseTransform,
  ) {
    super(config, DAFF_PRODUCT_IN_MEMORY_COLLECTION_NAME);
  }

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

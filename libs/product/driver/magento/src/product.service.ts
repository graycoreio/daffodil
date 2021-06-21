import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  of,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import {
  MAGENTO_PRODUCT_CONFIG_TOKEN,
  DaffProductMagentoDriverConfig,
} from './interfaces/public_api';
import { GetAllProductsQuery } from './queries/get-all-products';
import { GetProductQuery } from './queries/get-product';
import { GetProductByUrlQuery } from './queries/get-product-by-url';
import {
  transformMagentoProductResponse,
  transformManyMagentoProducts,
} from './transforms/public_api';

/**
 * A service for making magento apollo queries for products of type, {@link DaffProduct}.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoProductService implements DaffProductServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(MAGENTO_PRODUCT_CONFIG_TOKEN) private config: DaffProductMagentoDriverConfig,
  ) {}

  get(productId: DaffProduct['id']): Observable<DaffProductDriverResponse> {
    return this.apollo.query<any>({
      query: GetProductQuery,
      variables: {
        sku: productId,
      },
    }).pipe(
      map(result => transformMagentoProductResponse(result.data.products.items[0], this.config.baseMediaUrl)),
    );
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse> {
    return this.apollo.query<any>({
      query: GetProductByUrlQuery,
      variables: {
        url: this.config.urlTruncationStrategy(url),
      },
    }).pipe(
      map(result => transformMagentoProductResponse(result.data.products.items[0], this.config.baseMediaUrl)),
    );
  }

  getAll(): Observable<DaffProduct[]> {
    return this.apollo.query<any>({
      query: GetAllProductsQuery,
    }).pipe(
      map(result => transformManyMagentoProducts(result.data.products.items, this.config.baseMediaUrl)),
    );
  }

  //todo: add actual getBestSellers apollo call for Magento.
  //todo: move to a different bestsellers module.
  getBestSellers(): Observable<DaffProduct[]> {
    return of(null);
  }
}

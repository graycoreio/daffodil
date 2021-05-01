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

import {
  DAFF_TRUNCATE_LEADING_PATH_SEGMENTS_REGEX,
  daffUriTruncateLeadingPathSegments,
} from '@daffodil/driver';
import { DaffProduct } from '@daffodil/product';
import { DaffProductServiceInterface } from '@daffodil/product/driver';

import {
  MAGENTO_PRODUCT_CONFIG_TOKEN,
  DaffProductMagentoDriverConfig,
} from './interfaces/public_api';
import { GetAllProductsQuery } from './queries/get-all-products';
import { GetProductQuery } from './queries/get-product';
import { GetProductByUrlQuery } from './queries/get-product-by-url';
import {
  transformMagentoProduct,
  transformManyMagentoProducts,
} from './transforms/product-transformers';

/**
 * A service for making magento apollo queries for products of type, DaffProduct.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoProductService implements DaffProductServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(MAGENTO_PRODUCT_CONFIG_TOKEN) private config: DaffProductMagentoDriverConfig,
  ) {}

  /**
   * Get an Observable of a DaffProduct by uid.
   *
   * @param productId a product Id
   */
  get(productId: DaffProduct['id']): Observable<DaffProduct> {
    return this.apollo.query<any>({
      query: GetProductQuery,
      variables: {
        sku: productId,
      },
    }).pipe(
      map(result => transformMagentoProduct(result.data.products.items[0], this.config.baseMediaUrl)),
    );
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProduct> {
    return this.apollo.query<any>({
      query: GetProductByUrlQuery,
      variables: {
        url: daffUriTruncateLeadingPathSegments(this.config.uriTruncationStrategy(url)),
      },
    }).pipe(
      map(result => transformMagentoProduct(result.data.products.items[0], this.config.baseMediaUrl)),
    );
  }

  /**
   * Get an Observable of an array of DaffProducts.
   */
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

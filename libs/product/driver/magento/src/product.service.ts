import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from '@damienwebdev/apollo-angular';
import { DocumentNode } from 'graphql';
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
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM,
} from './injection-tokens/public_api';
import {
  MAGENTO_PRODUCT_CONFIG_TOKEN,
  DaffProductMagentoDriverConfig,
  DaffMagentoProductResponseTransform,
} from './interfaces/public_api';
import { MagentoGetProductResponse } from './models/public_api';
import { getAllProducts } from './queries/get-all-products';
import { getProduct } from './queries/get-product';
import { getProductByUrl } from './queries/get-product-by-url';
import { DaffMagentoProductsTransformer } from './transforms/product-transformers';

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
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM) private responseTransform: DaffMagentoProductResponseTransform,
    @Inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS) private extraFragments: DocumentNode[],
    @Inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS) private extraPreviewFragments: DocumentNode[],
    private magentoProductsTransformer: DaffMagentoProductsTransformer,
  ) {}

  get(productId: DaffProduct['id']): Observable<DaffProductDriverResponse> {
    return this.apollo.query<MagentoGetProductResponse>({
      query: getProduct([
        ...this.extraPreviewFragments,
        ...this.extraFragments,
      ]),
      variables: {
        sku: productId,
      },
    }).pipe(
      map(result => this.responseTransform(result.data.products.items[0], this.config.baseMediaUrl)),
    );
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse> {
    return this.apollo.query<MagentoGetProductResponse>({
      query: getProductByUrl([
        ...this.extraPreviewFragments,
        ...this.extraFragments,
      ]),
      variables: {
        url: this.config.urlTruncationStrategy(url),
      },
    }).pipe(
      map(result => this.responseTransform(result.data.products.items[0], this.config.baseMediaUrl)),
    );
  }

  getAll(): Observable<DaffProduct[]> {
    return this.apollo.query<MagentoGetProductResponse>({
      query: getAllProducts([
        ...this.extraPreviewFragments,
        ...this.extraFragments,
      ]),
    }).pipe(
      map(result => this.magentoProductsTransformer.transformManyMagentoProducts(result.data.products.items, this.config.baseMediaUrl)),
    );
  }

  //todo: add actual getBestSellers apollo call for Magento.
  //todo: move to a different bestsellers module.
  getBestSellers(): Observable<DaffProduct[]> {
    return of(null);
  }
}

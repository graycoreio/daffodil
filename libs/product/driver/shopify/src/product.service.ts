import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  shopifyIdTransformer,
  shopifyUrlTransformer,
} from '@daffodil/driver/shopify';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import {
  getAllProducts,
  getProduct,
  getProductByUrl,
} from './queries/public_api';
import { daffShopifyProductTransformer } from './transforms/public_api';

/**
 * A service for getting DaffProducts {@link DaffProduct} from apollo shopify product requests.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffShopifyProductService
implements DaffProductServiceInterface {
  defaultLength = 20;

  constructor(private apollo: Apollo) {}

  getAll(): Observable<DaffProduct[]> {
    return this.apollo
      .query({
        query: getAllProducts,
        variables: {
          length: this.defaultLength,
        },
      })
      .pipe(
        map((result) => {
          const nodes = result.data?.products?.nodes || [];
          return nodes.map((node) => daffShopifyProductTransformer(node));
        }),
      );
  }

  get(productId: DaffProduct['id']): Observable<DaffProductDriverResponse> {
    return this.apollo
      .query({
        query: getProduct,
        variables: { id: shopifyIdTransformer(productId, 'Product') },
      })
      .pipe(
        map((result) => {
          const productNode = result.data;
          return {
            id: productNode.id,
            products: [daffShopifyProductTransformer(productNode)],
          };
        }),
      );
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse> {
    return this.apollo
      .query({
        query: getProductByUrl,
        variables: { handle: shopifyUrlTransformer(url) },
      })
      .pipe(
        map((result) => {
          const productNode = result.data;
          return {
            id: productNode.id,
            products: [daffShopifyProductTransformer(productNode)],
          };
        }),
      );
  }
}

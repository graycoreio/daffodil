import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffGetCategoryResponse,
  DaffCategoryUrlRequest,
  DaffCategoryIdRequest,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';
import {
  shopifyIdTransformer,
  shopifyUrlTransformer,
} from '@daffodil/driver/shopify';

import {
  getCategory,
  getCategoryByUrl,
} from './queries/public_api';
import { daffShopifyCategoryTransformer } from './transforms/public_api';
import { shopifyProductCollectionVariablesTransformer } from './transforms/shopify-product-collection-variables-transform.ts';

/**
 * A service for making shopify apollo queries for categories. Should be provided via the {@link DaffCategoryDriver} token.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffShopifyCategoryService implements DaffCategoryServiceInterface {

  constructor(private apollo: Apollo) {}

  get(categoryRequest: DaffCategoryIdRequest): Observable<DaffGetCategoryResponse> {
    const shopifyVariables = shopifyProductCollectionVariablesTransformer(categoryRequest);
    return this.apollo
      .query({
        query: getCategory,
        variables: {
          id: shopifyIdTransformer(categoryRequest.id, 'Collection'),
          sortKey: shopifyVariables.sortKey,
          reverse: shopifyVariables.reverse,
          filters: shopifyVariables.filters,
          first: shopifyVariables.first,
        },
      })
      .pipe(
        map((result) => {
          const collection = result.data.collection;
          return daffShopifyCategoryTransformer(collection, shopifyVariables);
        }),
      );
  }

  getByUrl(categoryRequest: DaffCategoryUrlRequest): Observable<DaffGetCategoryResponse> {
    const shopifyVariables = shopifyProductCollectionVariablesTransformer(categoryRequest);
    return this.apollo
      .query({
        query: getCategoryByUrl,
        variables: {
          handle: shopifyUrlTransformer(categoryRequest.url),
          sortKey: shopifyVariables.sortKey,
          reverse: shopifyVariables.reverse,
          filters: shopifyVariables.filters,
          first: shopifyVariables.first,
        },
      })
      .pipe(
        map((result) => {
          const collection = result.data.collection;
          return daffShopifyCategoryTransformer(collection, shopifyVariables);
        }),
      );
  }
}

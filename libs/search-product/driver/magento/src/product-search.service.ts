import {
  Inject,
  Injectable,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '@daffodil/search-product';
import { DaffSearchProductResult } from '@daffodil/search-product';
import { DaffSearchProductDriverInterface } from '@daffodil/search-product/driver';

import { MagentoSearchForProductsResponse } from './models/get-product-response.interface';
import { productSearch } from './queries/product-search';
import { daffSearchMagentoProductResultTransform } from './transforms/search-product-result';

/**
 * A service for searching products in Magento.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchProductMagentoDriver implements DaffSearchProductDriverInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  readonly kind = DAFF_SEARCH_PRODUCT_RESULT_KIND;

  search(query: string): Observable<DaffSearchResultCollection<DaffSearchProductResult>> {
    return this.apollo.query<MagentoSearchForProductsResponse>({
      query: productSearch,
      variables: {
        query,
      },
    }).pipe(
      map(result => result.data.products.items.map(daffSearchMagentoProductResultTransform)),
      map(searchResults => daffSearchTransformResultsToCollection<DaffSearchProductResult>(searchResults)),
    );
  }
}

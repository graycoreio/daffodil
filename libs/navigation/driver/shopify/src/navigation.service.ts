import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APOLLO_CLIENT_NAME } from '@daffodil/driver/shopify';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface } from '@daffodil/navigation/driver';

import {
  getCollectionMenuQuery,
  getCollectionQuery,
} from './query/get-collection-menu';
import {
  transformShopifyMenuToNavTree,
  transformShopifyCollectionToNavItem,
} from './transforms/navigation-transform';

/**
 * A service for retrieving navigation data from Shopify collections.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffShopifyNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {

  constructor(private apollo: Apollo) {}

  getTree(): Observable<DaffNavigationTree> {
    return this.apollo.use(APOLLO_CLIENT_NAME)
      .query({
        query: getCollectionMenuQuery,
        variables: {
          handle: 'collections',
        },
      })
      .pipe(
        map((result: any) => {
          const menu = result.data?.menu;
          return transformShopifyMenuToNavTree(menu);
        }),
      );
  }

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.apollo.use(APOLLO_CLIENT_NAME)
      .query({
        query: getCollectionQuery,
        variables: {
          id: categoryId,
        },
      })
      .pipe(
        map((result: any) => {
          const collection = result.data?.collection;
          return transformShopifyCollectionToNavItem(collection);
        }),
      );
  }

}

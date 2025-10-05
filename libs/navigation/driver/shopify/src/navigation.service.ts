import {
  Inject,
  Injectable,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APOLLO_CLIENT_NAME } from '@daffodil/driver/shopify';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface } from '@daffodil/navigation/driver';

import {
  SHOPIFY_NAVIGATION_DRIVER_CONFIG,
  ShopifyNavigationDriverConfig,
} from './config/public_api';
import { getCollectionMenuQuery } from './query/get-collection-menu';
import { transformShopifyMenuToNavTree } from './transforms/navigation-transform';

/**
 * A service for retrieving navigation data from Shopify collections.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffShopifyNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {

  constructor(
    private apollo: Apollo,
    @Inject(SHOPIFY_NAVIGATION_DRIVER_CONFIG) private config: ShopifyNavigationDriverConfig,
  ) {}

  getTree(): Observable<DaffNavigationTree> {
    return this.apollo.use(APOLLO_CLIENT_NAME)
      .query({
        query: getCollectionMenuQuery(this.config.navigationTreeQueryDepth),
        variables: {
          handle: 'collections',
        },
      })
      .pipe(
        map((result: any) => {
          const menu = result.data?.menu;
          /**
           * TODO standardize along with @daffodil/navigation error handling
           */
          return transformShopifyMenuToNavTree(menu);
        }),
      );
  }

  /**
   * @inheritdoc
   *
   * This method will likely be removed in a later version.
   */
  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.getTree();
  }

}

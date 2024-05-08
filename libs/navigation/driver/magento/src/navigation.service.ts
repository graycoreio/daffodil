import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  of,
} from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationTransformer,
  DaffNavigationServiceInterface,
  DaffNavigationTransformerInterface,
} from '@daffodil/navigation/driver';

import {
  MAGENTO_NAVIGATION_DRIVER_CONFIG,
  MagentoNavigationDriverConfig,
} from './config/public_api';
import { GetCategoryTreeResponse } from './models/get-category-tree-response';
import { daffMagentoGetCategoryTree } from './queries/get-category-tree';
import { magentoNavigationGetRootCategoryIdQuery } from './queries/get-root-category-id/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {

  constructor(
    private apollo: Apollo,
    @Inject(DaffNavigationTransformer) private transformer: DaffNavigationTransformerInterface<DaffNavigationTree>,
    @Inject(MAGENTO_NAVIGATION_DRIVER_CONFIG) private config: MagentoNavigationDriverConfig,
  ) {}

  getTree(): Observable<DaffNavigationTree> {
    const rootCategoryId = this.config.rootCategoryId
      ? of(this.config.rootCategoryId)
      : this.apollo.query({
        query: magentoNavigationGetRootCategoryIdQuery,
      }).pipe(
        map(({ data }) => data.storeConfig.root_category_uid),
      );

    return rootCategoryId.pipe(
      switchMap((id) => this.get(id)),
    );
  }

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.apollo.query<GetCategoryTreeResponse>({
      query: daffMagentoGetCategoryTree(this.config.navigationTreeQueryDepth),
      variables: {
        filters: { category_uid: { eq: categoryId }},
      },
    }).pipe(
      map(result => this.transformer.transform(result.data.categoryList[0])),
    );
  }
}

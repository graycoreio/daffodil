import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationTransformer,
  DaffNavigationServiceInterface,
  DaffNavigationTransformerInterface,
} from '@daffodil/navigation/driver';

import { MAGENTO_NAVIGATION_TREE_QUERY_DEPTH } from './interfaces/navigation-config.interface';
import { GetCategoryTreeResponse } from './models/get-category-tree-response';
import { daffMagentoGetCategoryTree } from './queries/get-category-tree';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {

  constructor(
    private apollo: Apollo,
    @Inject(DaffNavigationTransformer) private transformer: DaffNavigationTransformerInterface<DaffNavigationTree>,
    @Inject(MAGENTO_NAVIGATION_TREE_QUERY_DEPTH) private categoryTreeQueryDepth: number,
  ) {}

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.apollo.query<GetCategoryTreeResponse>({
      query: daffMagentoGetCategoryTree(this.categoryTreeQueryDepth),
      variables: {
        filters: { category_uid: { eq: categoryId }},
      },
    }).pipe(
      map(result => this.transformer.transform(result.data.categoryList[0])),
    );
  }
}

import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffNavigationServiceInterface } from '../interfaces/navigation-service.interface';
import { getCategoryTree } from './queries/get-category-tree';
import { GetCategoryTreeResponse } from './interfaces/get-category-tree-response';
import { DaffNavigationTransformer } from '../injection-tokens/navigation-transformer.token';
import { DaffNavigationTransformerInterface } from '../interfaces/navigation-transformer.interface';
import { DaffNavigationTree } from '../../models/navigation-tree';
import { DaffNavigationCategoryTreeQueryDepth } from '../injection-tokens/category-tree-query-depth.token';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {

  constructor(
    private apollo: Apollo,
    @Inject(DaffNavigationTransformer) private transformer: DaffNavigationTransformerInterface<DaffNavigationTree>,
    @Inject(DaffNavigationCategoryTreeQueryDepth) private categoryTreeQueryDepth: number
  ) {}

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.apollo.query<GetCategoryTreeResponse>({
      query: getCategoryTree(this.categoryTreeQueryDepth),
      variables: {
        filters: { ids: { eq: categoryId } }
      }
    }).pipe(
      map(result => this.transformer.transform(result.data.categoryList[0]))
    );
  }
}

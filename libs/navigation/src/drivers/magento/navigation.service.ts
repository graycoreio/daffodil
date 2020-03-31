import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffNavigationServiceInterface } from '../interfaces/navigation-service.interface';
import { GetCategoryTree } from './queries/get-category-tree';
import { GetCategoryTreeResponse } from './interfaces/get-category-tree-response';
import { DaffNavigationTransformer } from '../injection-tokens/navigation-transformer.token';
import { DaffNavigationTransformerInterface } from '../interfaces/navigation-transformer.interface';
import { DaffNavigationTreeUnion } from '../../models/navigation-tree-union';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoNavigationService implements DaffNavigationServiceInterface<DaffNavigationTreeUnion> {
  
  constructor(
    private apollo: Apollo,
    @Inject(DaffNavigationTransformer) private transformer: DaffNavigationTransformerInterface<DaffNavigationTreeUnion>) {}

  get(categoryId: string): Observable<DaffNavigationTreeUnion> {
    return this.apollo.query<GetCategoryTreeResponse>({
      query: GetCategoryTree,
      variables: {
        filters: { ids: { eq: categoryId } }
      }
    }).pipe(
      map(result => this.transformer.transform(result.data.categoryList[0]))
    );
  }
}

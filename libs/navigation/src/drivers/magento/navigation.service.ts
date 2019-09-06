import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffNavigationTree } from '../../models/navigation-tree';
import { DaffNavigationServiceInterface } from '../interfaces/navigation-service.interface';
import { GetCategoryTree } from './queries/get-category-tree';
import { DaffMagentoNavigationTransformerService } from './transformers/navigation-transformer';
import { GetCategoryTreeResponse } from './interfaces/get-category-tree-response';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {
  
  constructor(
    private apollo: Apollo,
    private transformer: DaffMagentoNavigationTransformerService) {}

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.apollo.query<GetCategoryTreeResponse>({
      query: GetCategoryTree,
      variables: {
        id: parseInt(categoryId, 10)
      }
    }).pipe(
      map(result => this.transformer.transform(result.data.category))
    );
  }
}

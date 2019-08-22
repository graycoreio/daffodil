import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffNavigationTree } from '../../models/navigation-tree';
import { DaffNavigationServiceInterface } from '../interfaces/navigation-service.interface';
import { GetCategoryTree } from './queries/get-category-tree';
import { DaffMagentoCategoryTransformer } from './transformers/category-transformer';
import { GetCategoryTreeResponse } from './interfaces/get-category-tree-response';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoNavigationService implements DaffNavigationServiceInterface {

  defaultLength = 20;
  
  constructor(private apollo: Apollo) {}

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.apollo.query<GetCategoryTreeResponse>({
      query: GetCategoryTree,
      variables: {
        id: categoryId
      }
    }).pipe(
      map(result => {
        return DaffMagentoCategoryTransformer(result.data.category)
      })
    );
  }
}

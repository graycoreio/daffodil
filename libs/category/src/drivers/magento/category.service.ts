import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffMagentoProductTransformerService } from '@daffodil/product';

import { DaffCategoryServiceInterface } from '../interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { CategoryNode } from './models/category-node';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { DaffMagentoCategoryGraphQlQueryManagerService } from './queries/category-query-manager.service';

interface GetACategoryResponse {
  category: CategoryNode
}

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryService implements DaffCategoryServiceInterface {
  
  constructor(
    private apollo: Apollo,
    private queryManager: DaffMagentoCategoryGraphQlQueryManagerService,
    private magentoCategoryTransformerService: DaffMagentoCategoryTransformerService,
    private magentoProductTransformerService: DaffMagentoProductTransformerService
  ) {}

  get(categoryId: string): Observable<DaffGetCategoryResponse> {
    return this.apollo.query<GetACategoryResponse>(this.queryManager.getACategoryQuery(categoryId)).pipe(
      map(result => {
        return {
          category: this.magentoCategoryTransformerService.transform(result.data.category),
          products: this.magentoProductTransformerService.transformMany(result.data.category.products.items)
        }
      })
    );
  }
}

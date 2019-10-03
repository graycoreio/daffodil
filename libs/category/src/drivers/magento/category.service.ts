import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffMagentoProductTransformerService, DaffMagentoProductGraphQlQueryManagerService } from '@daffodil/product';

import { DaffCategoryServiceInterface } from '../interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { CategoryNode } from './models/outputs/category-node';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { DaffMagentoCategoryGraphQlQueryManagerService } from './queries/category-query-manager.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './transformers/category-page-config-transformer.service';

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
    private productQueryManager: DaffMagentoProductGraphQlQueryManagerService,
    private magentoCategoryTransformerService: DaffMagentoCategoryTransformerService,
    private magentoCategoryPageConfigurationTransformerService: DaffMagentoCategoryPageConfigTransformerService,
    private magentoProductTransformerService: DaffMagentoProductTransformerService
  ) {}

  get(categoryId: string): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<GetACategoryResponse>(this.queryManager.getACategoryQuery(parseInt(categoryId, 10))),
      this.apollo.query<any>(this.productQueryManager.getSortFieldsAndFiltersByCategory(categoryId))
    ]).pipe(
      map(result => {
        return {
          category: this.magentoCategoryTransformerService.transform(result[0].data.category),
          categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(result[0].data.category, result[1].data.products),
          products: this.magentoProductTransformerService.transformMany(result[0].data.category.products.items)
        }
      })
    );
  }
}

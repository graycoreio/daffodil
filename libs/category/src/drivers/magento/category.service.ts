import { Injectable, Inject } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import {
	GetSortFieldsAndFiltersProductResponse,
	GetSortFieldsAndFiltersByCategory
} from '@daffodil/product';

import { DaffCategoryServiceInterface } from '../interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { DaffCategoryRequest } from '../../models/category-request';
import { CompleteCategoryResponse } from './models/outputs/complete-category-response';
import { GetACategoryResponse } from './models/outputs/get-category-response';
import { DaffCategoryQueryManager } from '../injection-tokens/category-query-manager.token';
import { DaffCategoryQueryManagerInterface } from '../interfaces/category-query-manager.interface';
import { DaffCategoryResponseTransformer } from '../injection-tokens/category-response-transformer.token';
import { DaffCategoryResponseTransformerInterface } from '../interfaces/category-response-transformer.interface';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryService implements DaffCategoryServiceInterface {
  
  constructor(
    private apollo: Apollo,
    @Inject(DaffCategoryQueryManager) public queryManager: DaffCategoryQueryManagerInterface,
    @Inject(DaffCategoryResponseTransformer) public magentoCategoryResponseTransformerService: DaffCategoryResponseTransformerInterface<DaffGetCategoryResponse>
  ) {}

  /**
   * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
   * @param categoryRequest A DaffCategoryRequest object.
   */
  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<GetACategoryResponse>(this.queryManager.getACategoryQuery(
        parseInt(categoryRequest.id, 10),
        categoryRequest.current_page ? categoryRequest.current_page : 1,
        categoryRequest.page_size ? categoryRequest.page_size : 20
      )),
      this.apollo.query<GetSortFieldsAndFiltersProductResponse>({
				query: GetSortFieldsAndFiltersByCategory,
				variables: {
					categoryId: categoryRequest.id
				}
			})
    ]).pipe(
      map((result): CompleteCategoryResponse => {
        return {
          category: result[0].data.category,
          sortsAndFilters: result[1].data.products
        }
      }),
      map(result => this.magentoCategoryResponseTransformerService.transform(result))
    );
  }
}

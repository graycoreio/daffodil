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
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { CompleteCategoryResponse } from './models/outputs/complete-category-response';
import { GetACategoryResponse } from './models/outputs/get-category-response';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { GetACategoryQuery } from './queries/get-a-category';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryService implements DaffCategoryServiceInterface {
  
  constructor(
    private apollo: Apollo,
    private magentoCategoryResponseTransformerService: DaffMagentoCategoryResponseTransformService
  ) {}

  /**
   * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
   * @param categoryRequest A DaffCategoryRequest object.
   */
  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<GetACategoryResponse>({
				query: GetACategoryQuery,
				variables: {
					id: parseInt(categoryRequest.id, 10),
					current_page: categoryRequest.current_page ? categoryRequest.current_page : 1,
					page_size: categoryRequest.page_size ? categoryRequest.page_size : 20
				}
			}),
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

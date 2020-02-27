import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffCategoryServiceInterface } from '../interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../../models/inputs/get-category-response';
import { DaffCategoryRequest } from '../../models/outputs/category-request';
import { CompleteCategoryResponse } from './models/inputs/complete-category-response';
import { GetACategoryResponse } from './models/inputs/category/get-category-response';
import { GetCategoryQuery } from './queries/get-category';
import { MagentoGetProductsResponse } from './models/inputs/products/get-products-response';
import { GetProductsQuery } from './queries/get-products';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
import { DaffMagentoAppliedSortOptionTransformService } from './transformers/applied-sort-option-transformer.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryService implements DaffCategoryServiceInterface {
  
  constructor(
    private apollo: Apollo,
		private magentoCategoryResponseTransformer: DaffMagentoCategoryResponseTransformService,
		private magentoAppliedFiltersTransformer: DaffMagentoAppliedFiltersTransformService,
		private magentoAppliedSortTransformer: DaffMagentoAppliedSortOptionTransformService
  ) {}

	//todo the GetCategoryQuery needs to get its own product ids.
  /**
   * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
   * @param categoryRequest A DaffCategoryRequest object.
   */
  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<GetACategoryResponse>({
				query: GetCategoryQuery,
				variables: { id: { eq: categoryRequest.id}}
			}),
      this.apollo.query<MagentoGetProductsResponse>({
				query: GetProductsQuery,
				variables: {
					filter: this.magentoAppliedFiltersTransformer.transform(categoryRequest.applied_filters),
					search: null,
					pageSize: categoryRequest.page_size,
					currentPage: categoryRequest.current_page,
					sort: this.magentoAppliedSortTransformer.transform(categoryRequest.applied_sort_option, categoryRequest.applied_sort_direction)
				}
			})
    ]).pipe(
      map((result): CompleteCategoryResponse => {
        return {
          category: result[0].data.category,
					products: result[1].data.products,
					aggregates: result[1].data.aggregates,
					sort_fields: result[1].data.sort_fields,
					total_count: result[1].data.total_count,
					page_info: result[1].data.page_info
        }
      }),
      map((result: CompleteCategoryResponse) => this.magentoCategoryResponseTransformer.transform(result))
    );
  }
}

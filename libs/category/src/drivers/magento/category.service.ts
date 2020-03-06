import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffCategoryServiceInterface } from '../interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { MagentoCompleteCategoryResponse } from './models/complete-category-response';
import { MagentoGetACategoryResponse } from './models/get-category-response';
import { MagentoGetCategoryQuery } from './queries/get-category';
import { MagentoGetProductsResponse } from './models/get-products-response';
import { MagentoGetProductsQuery } from './queries/get-products';
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

	//todo the MagentoGetCategoryQuery needs to get its own product ids.
  /**
   * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
   * @param categoryRequest A DaffCategoryRequest object.
   */
  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<MagentoGetACategoryResponse>({
				query: MagentoGetCategoryQuery,
				variables: { id: { eq: categoryRequest.id}}
			}),
      this.apollo.query<MagentoGetProductsResponse>({
				query: MagentoGetProductsQuery,
				variables: this.getProductsQueryVariables(categoryRequest)
			})
    ]).pipe(
      map((result): MagentoCompleteCategoryResponse => this.buildCompleteCategoryResponse(result[0].data, result[1].data)),
      map((result: MagentoCompleteCategoryResponse) => this.magentoCategoryResponseTransformer.transform(result))
    );
	}
	
	private getProductsQueryVariables(request: DaffCategoryRequest) {
		let queryVariables = {
			filter: this.magentoAppliedFiltersTransformer.transform(request.id, request.applied_filters)
		};
		if(request.page_size) queryVariables['pageSize'] = request.page_size;
		if(request.current_page) queryVariables['currentPage'] = request.current_page;
		if(request.applied_sort_option && request.applied_sort_direction) {
			queryVariables['sort'] = this.magentoAppliedSortTransformer.transform(request.applied_sort_option, request.applied_sort_direction);
		}

		return queryVariables;
	}

	private buildCompleteCategoryResponse(
		categoryResponse: MagentoGetACategoryResponse, 
		productsResponse: MagentoGetProductsResponse
	): MagentoCompleteCategoryResponse {
		return {
			category: categoryResponse.categoryList[0],
			products: productsResponse.products.items,
			aggregates: productsResponse.products.aggregations,
			sort_fields: productsResponse.products.sort_fields,
			total_count: productsResponse.products.total_count,
			page_info: productsResponse.products.page_info
		};
	}
}

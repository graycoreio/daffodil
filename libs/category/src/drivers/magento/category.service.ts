import { Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
import { MagentoGetProductsByCategoriesRequest } from './models/requests/get-products-by-categories-request';
import { MagentoGetCategoryAggregations } from './queries/get-category-aggregations';
import { MagentoGetCategoryAggregationsResponse } from './models/get-category-aggregations-response';
import { MagentoCustomAttributeMetadataResponse } from './models/custom-attribute-metadata-response';
import { MagentoGetCustomAttributeMetadata } from './queries/custom-attribute-metadata';
import { buildCustomMetadataAttribute, addMetadataTypesToAggregates } from './transformers/custom-metadata-attributes-methods';

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
				variables: { filters: {ids: { eq: categoryRequest.id}}}
			}),
      this.apollo.query<MagentoGetCategoryAggregationsResponse>({
				query: MagentoGetCategoryAggregations,
				variables: {filter: {category_id: {eq: categoryRequest.id}}}
			}),
      this.apollo.query<MagentoGetProductsResponse>({
				query: MagentoGetProductsQuery,
				variables: this.getProductsQueryVariables(categoryRequest)
			})
    ]).pipe(
      map((result): MagentoCompleteCategoryResponse => this.buildCompleteCategoryResponse(result[0].data, result[1].data, result[2].data)),
			switchMap((categoryResult: MagentoCompleteCategoryResponse) => {
				return this.apollo.query<MagentoCustomAttributeMetadataResponse>({
					query: MagentoGetCustomAttributeMetadata,
					variables: { 
						attributes: categoryResult.aggregates
							.filter(aggregate => aggregate.attribute_code !== 'category_id')
							.map(aggregate => buildCustomMetadataAttribute(aggregate))
					}
				}).pipe(
					map(response => addMetadataTypesToAggregates(response.data, categoryResult)),
					map((finalResult: MagentoCompleteCategoryResponse) => this.magentoCategoryResponseTransformer.transform(finalResult))
				)
			})
		);
	}
	
	private getProductsQueryVariables(request: DaffCategoryRequest): MagentoGetProductsByCategoriesRequest {
		const queryVariables = {
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
		aggregationsAndSortsResponse: MagentoGetCategoryAggregationsResponse,
		productsResponse: MagentoGetProductsResponse
	): MagentoCompleteCategoryResponse {
		return {
			category: categoryResponse.categoryList[0],
			products: productsResponse.products.items,
			aggregates: aggregationsAndSortsResponse.products.aggregations,
			sort_fields: aggregationsAndSortsResponse.products.sort_fields,
			total_count: productsResponse.products.total_count,
			page_info: productsResponse.products.page_info
		};
	}
}

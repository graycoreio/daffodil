import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  combineLatest,
} from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import {
  DaffCategoryRequest,
  DaffGetCategoryResponse,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';

import {
  MagentoGetACategoryResponse,
  MagentoGetCategoryAggregationsResponse,
  MagentoCustomAttributeMetadataResponse,
  MagentoGetProductsResponse,
  MagentoCompleteCategoryResponse,
  MagentoGetProductsByCategoriesRequest,
} from './models/public_api';
import {
  MagentoGetProductsQuery,
  MagentoGetCategoryQuery,
  MagentoGetCategoryAggregations,
  MagentoGetCustomAttributeMetadata,
} from './queries/public_api';
import {
  buildCustomMetadataAttribute,
  addMetadataTypesToAggregates,
  DaffMagentoCategoryResponseTransformService,
  DaffMagentoAppliedFiltersTransformService,
  DaffMagentoAppliedSortOptionTransformService,
} from './transformers/public_api';


@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryService implements DaffCategoryServiceInterface {

  constructor(
    private apollo: Apollo,
		private magentoCategoryResponseTransformer: DaffMagentoCategoryResponseTransformService,
		private magentoAppliedFiltersTransformer: DaffMagentoAppliedFiltersTransformService,
		private magentoAppliedSortTransformer: DaffMagentoAppliedSortOptionTransformService,
  ) {}

  //todo the MagentoGetCategoryQuery needs to get its own product ids.
  /**
   * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
   *
   * @param categoryRequest A DaffCategoryRequest object.
   */
  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<MagentoGetACategoryResponse>({
        query: MagentoGetCategoryQuery,
        variables: { filters: { ids: { eq: categoryRequest.id }}},
      }),
      this.apollo.query<MagentoGetCategoryAggregationsResponse>({
        query: MagentoGetCategoryAggregations,
        variables: { filter: { category_id: { eq: categoryRequest.id }}},
      }).pipe(
        switchMap((aggregationResult): Observable<MagentoGetCategoryAggregationsResponse> =>
          this.apollo.query<MagentoCustomAttributeMetadataResponse>({
            query: MagentoGetCustomAttributeMetadata,
            variables: {
              attributes: aggregationResult.data.products.aggregations
                .filter(aggregate => aggregate.attribute_code !== 'category_id')
                .map(aggregate => buildCustomMetadataAttribute(aggregate)),
            },
          }).pipe(
            map(response => addMetadataTypesToAggregates(response.data, aggregationResult.data)),
          ),
        ),
      ),
      this.apollo.query<MagentoGetProductsResponse>({
        query: MagentoGetProductsQuery,
        variables: this.getProductsQueryVariables(categoryRequest),
      }),
    ]).pipe(
      map((result): MagentoCompleteCategoryResponse => this.buildCompleteCategoryResponse(result[0].data, result[1], result[2].data)),
      map((finalResult: MagentoCompleteCategoryResponse) => this.magentoCategoryResponseTransformer.transform(finalResult)),
    );
  }

  private getProductsQueryVariables(request: DaffCategoryRequest): MagentoGetProductsByCategoriesRequest {
    const queryVariables = {
      filter: this.magentoAppliedFiltersTransformer.transform(request.id, request.filter_requests),
    };
    if(request.page_size) {
      queryVariables['pageSize'] = request.page_size;
    }
    if(request.current_page) {
      queryVariables['currentPage'] = request.current_page;
    }
    if(request.applied_sort_option && request.applied_sort_direction) {
      queryVariables['sort'] = this.magentoAppliedSortTransformer.transform(request.applied_sort_option, request.applied_sort_direction);
    }

    return queryVariables;
  }

  private buildCompleteCategoryResponse(
    categoryResponse: MagentoGetACategoryResponse,
    aggregationsAndSortsResponse: MagentoGetCategoryAggregationsResponse,
    productsResponse: MagentoGetProductsResponse,
  ): MagentoCompleteCategoryResponse {
    return {
      category: categoryResponse.categoryList[0],
      products: productsResponse.products.items,
      aggregates: aggregationsAndSortsResponse.products.aggregations,
      sort_fields: aggregationsAndSortsResponse.products.sort_fields,
      total_count: productsResponse.products.total_count,
      page_info: productsResponse.products.page_info,
    };
  }
}

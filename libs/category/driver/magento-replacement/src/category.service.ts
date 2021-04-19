import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  combineLatest,
  of,
} from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import {
  DaffGetCategoryResponse,
  daffApplyRequestsToFilters,
  DaffCategoryIdRequest,
  DaffCategoryUriRequest,
  DaffCategoryPageRequestKind,
  DaffCategoryFilterRequest,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';

import { MagentoGetCategoryFilterTypesResponse } from './models/get-filter-types-response.interface';
import {
  MagentoGetACategoryResponse,
  MagentoGetCategoryAggregationsResponse,
  MagentoGetProductsResponse,
  MagentoCompleteCategoryResponse,
  MagentoGetProductsByCategoriesRequest,
} from './models/public_api';
import { MagentoGetCategoryFilterTypes } from './queries/get-filter-types';
import {
  MagentoGetProductsQuery,
  MagentoGetCategoryQuery,
  MagentoGetCategoryAggregations,
} from './queries/public_api';
import {
  DaffMagentoCategoryResponseTransformService,
  DaffMagentoAppliedFiltersTransformService,
  DaffMagentoAppliedSortOptionTransformService,
} from './transformers/public_api';
import { addMetadataTypesToAggregates } from './transformers/pure/aggregate/add-metadata-types-to-aggregates';

const applyFiltersOnResponse = (requests: DaffCategoryFilterRequest[], response: DaffGetCategoryResponse): DaffGetCategoryResponse => ({
  ...response,
  categoryPageMetadata: {
    ...response.categoryPageMetadata,
    filters: daffApplyRequestsToFilters(requests, response.categoryPageMetadata.filters),
  },
});

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
   * @param categoryRequest A DaffCategoryIdRequest object.
   */
  get(categoryRequest: DaffCategoryIdRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<MagentoGetACategoryResponse>({
        query: MagentoGetCategoryQuery,
        variables: { filters: { category_uid: { eq: categoryRequest.id }}},
      }),
      this.apollo.query<MagentoGetCategoryAggregationsResponse>({
        query: MagentoGetCategoryAggregations,
        variables: { filter: { category_id: { eq: categoryRequest.id }}},
      }),
      this.apollo.query<MagentoGetCategoryFilterTypesResponse>({
        query: MagentoGetCategoryFilterTypes,
      }),
      this.apollo.query<MagentoGetProductsResponse>({
        query: MagentoGetProductsQuery,
        variables: this.getProductsQueryVariables(categoryRequest),
      }),
    ]).pipe(
      map(([
        category,
        aggregations,
        filterTypes,
        products,
      ]) => this.transformCategory(category.data, aggregations.data, filterTypes.data, products.data)),
      map(result => applyFiltersOnResponse(categoryRequest.filter_requests, result)),
    );
  }

  getByUri(categoryRequest: DaffCategoryUriRequest): Observable<DaffGetCategoryResponse> {
    const truncatedUri = categoryRequest.uri.replace('.html', '');

    return combineLatest([
      this.apollo.query<MagentoGetACategoryResponse>({
        query: MagentoGetCategoryQuery,
        variables: { filters: { url_path: { eq: truncatedUri }}},
      }),
      this.apollo.query<MagentoGetCategoryAggregationsResponse>({
        query: MagentoGetCategoryAggregations,
        variables: { filter: { url_path: { eq: truncatedUri }}},
      }),
      this.apollo.query<MagentoGetCategoryFilterTypesResponse>({
        query: MagentoGetCategoryFilterTypes,
      }),
    ]).pipe(
      switchMap(([
        category,
        aggregations,
        filterTypes,
      ]) => this.apollo.query<MagentoGetProductsResponse>({
        query: MagentoGetProductsQuery,
        variables: this.getProductsQueryVariables({
          ...categoryRequest,
          id: category.data.categoryList[0]?.id?.toString(),
          kind: DaffCategoryPageRequestKind.ID,
        }),
      }).pipe(
        map(products => this.transformCategory(category.data, aggregations.data, filterTypes.data, products.data)),
        map(result => applyFiltersOnResponse(categoryRequest.filter_requests, result)),
      )),
    );
  }

  private getProductsQueryVariables(request: DaffCategoryIdRequest): MagentoGetProductsByCategoriesRequest {
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

  private transformCategory(
    categoryResponse: MagentoGetACategoryResponse,
    aggregationsAndSortsResponse: MagentoGetCategoryAggregationsResponse,
    filterTypesResponse: MagentoGetCategoryFilterTypesResponse,
    productsResponse: MagentoGetProductsResponse,
  ): DaffGetCategoryResponse {
    const aggregations = addMetadataTypesToAggregates(filterTypesResponse, aggregationsAndSortsResponse);
    const completeCategory = {
      category: categoryResponse.categoryList[0],
      products: productsResponse.products.items,
      aggregates: aggregations.products.aggregations,
      sort_fields: aggregations.products.sort_fields,
      total_count: productsResponse.products.total_count,
      page_info: productsResponse.products.page_info,
    };

    return this.magentoCategoryResponseTransformer.transform(completeCategory);
  }
}

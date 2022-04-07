import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import {
  Observable,
  combineLatest,
} from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import {
  DaffGetCategoryResponse,
  daffApplyRequestsToFilters,
  DaffCategoryUrlRequest,
  DaffCategoryRequestKind,
  DaffCategoryFilterRequest,
  DaffCategoryIdRequest,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';
import {
  DaffProductMagentoDriverConfig,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  MAGENTO_PRODUCT_CONFIG_TOKEN,
} from '@daffodil/product/driver/magento';

import {
  MAGENTO_CATEGORY_CONFIG_TOKEN,
  DaffCategoryMagentoDriverConfig,
} from './interfaces/public_api';
import { MagentoGetCategoryFilterTypesResponse } from './models/get-filter-types-response.interface';
import {
  MagentoGetACategoryResponse,
  MagentoGetProductsResponse,
  MagentoGetProductsByCategoriesRequest,
} from './models/public_api';
import { MagentoGetCategoryFilterTypes } from './queries/get-filter-types';
import {
  MagentoGetProductsQuery,
  MagentoGetCategoryQuery,
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

/**
 * A service for making magento apollo queries for categories. Should be provided via the {@link DaffCategoryDriver} token.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryService implements DaffCategoryServiceInterface {

  constructor(
    private apollo: Apollo,
    private magentoCategoryResponseTransformer: DaffMagentoCategoryResponseTransformService,
    private magentoAppliedFiltersTransformer: DaffMagentoAppliedFiltersTransformService,
    private magentoAppliedSortTransformer: DaffMagentoAppliedSortOptionTransformService,
    @Inject(MAGENTO_CATEGORY_CONFIG_TOKEN) private config: DaffCategoryMagentoDriverConfig,
    @Inject(MAGENTO_PRODUCT_CONFIG_TOKEN) private productConfig: DaffProductMagentoDriverConfig,
    @Inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS) private extraPreviewFragments: DocumentNode[],
  ) {}

  //todo the MagentoGetCategoryQuery needs to get its own product ids.
  get(categoryRequest: DaffCategoryIdRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<MagentoGetACategoryResponse>({
        query: MagentoGetCategoryQuery,
        variables: { filters: { category_uid: { eq: categoryRequest.id }}},
      }),
      this.apollo.query<MagentoGetCategoryFilterTypesResponse>({
        query: MagentoGetCategoryFilterTypes,
      }),
      this.apollo.query<MagentoGetProductsResponse>({
        query: MagentoGetProductsQuery(this.extraPreviewFragments),
        variables: this.getProductsQueryVariables(categoryRequest),
      }),
    ]).pipe(
      map(([
        category,
        filterTypes,
        products,
      ]) => this.transformCategory(category.data, filterTypes.data, products.data, this.productConfig.baseMediaUrl)),
      map(result => categoryRequest.filter_requests
        ? applyFiltersOnResponse(categoryRequest.filter_requests, result)
        : result,
      ),
    );
  }

  getByUrl(categoryRequest: DaffCategoryUrlRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<MagentoGetACategoryResponse>({
        query: MagentoGetCategoryQuery,
        variables: { filters: { url_path: {
          eq: this.config.truncateUrl
            ? this.config.uriTruncationStrategy(categoryRequest.url)
            : categoryRequest.url,
        }}},
      }),
      this.apollo.query<MagentoGetCategoryFilterTypesResponse>({
        query: MagentoGetCategoryFilterTypes,
      }),
    ]).pipe(
      switchMap(([
        category,
        filterTypes,
      ]) => this.apollo.query<MagentoGetProductsResponse>({
        query: MagentoGetProductsQuery(this.extraPreviewFragments),
        variables: this.getProductsQueryVariables({
          ...categoryRequest,
          id: category.data.categoryList[0]?.uid,
          kind: DaffCategoryRequestKind.ID,
        }),
      }).pipe(
        map(products => this.transformCategory(category.data, filterTypes.data, products.data, this.productConfig.baseMediaUrl)),
        map(result => categoryRequest.filter_requests
          ? applyFiltersOnResponse(categoryRequest.filter_requests, result)
          : result,
        ),
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
    filterTypesResponse: MagentoGetCategoryFilterTypesResponse,
    productsResponse: MagentoGetProductsResponse,
    mediaUrl: string,
  ): DaffGetCategoryResponse {
    const aggregations = addMetadataTypesToAggregates(filterTypesResponse, productsResponse);
    const completeCategory = {
      category: categoryResponse.categoryList[0],
      products: productsResponse.products.items,
      aggregates: aggregations.products.aggregations,
      sort_fields: aggregations.products.sort_fields,
      total_count: productsResponse.products.total_count,
      page_info: productsResponse.products.page_info,
    };

    return this.magentoCategoryResponseTransformer.transform(completeCategory, mediaUrl);
  }
}

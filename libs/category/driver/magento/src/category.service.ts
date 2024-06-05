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
  DaffCategoryUrlRequest,
  DaffCategoryRequestKind,
  DaffCategoryIdRequest,
  DaffCategoryRequest,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';
import {
  daffApplyRequestsToFilters,
  DaffFilterRequest,
} from '@daffodil/core';
import {
  DaffProductMagentoDriverConfig,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
  MagentoProductGetFilterTypes,
  MagentoProductGetFilterTypesResponse,
  MAGENTO_PRODUCT_CONFIG_TOKEN,
  magentoAppliedSortOptionTransform,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
} from '@daffodil/product/driver/magento';

import { MAGENTO_CATEGORY_EXTRA_FRAGMENTS } from './fragments/public_api';
import {
  MAGENTO_CATEGORY_CONFIG_TOKEN,
  DaffCategoryMagentoDriverConfig,
} from './interfaces/public_api';
import {
  MagentoGetCategoryAndProductsRequest,
  MagentoGetCategoryAndProductsResponse,
  MagentoCategoryUrlResolverResponse,
  MagentoCompleteCategoryResponse,
} from './models/public_api';
import {
  MagentoGetCategoryAndProductsQuery,
  MagentoResolveCategoryUrl,
} from './queries/public_api';
import {
  DaffMagentoCategoryResponseTransformService,
  DaffMagentoAppliedFiltersTransformService,
} from './transformers/public_api';
import { addMetadataTypesToProductsResponse } from './transformers/pure/add-metadata-types-to-aggregates';

const applyFiltersOnResponse = (requests: DaffFilterRequest[], response: DaffGetCategoryResponse): DaffGetCategoryResponse => ({
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
    @Inject(MAGENTO_CATEGORY_CONFIG_TOKEN) private config: DaffCategoryMagentoDriverConfig,
    @Inject(MAGENTO_PRODUCT_CONFIG_TOKEN) private productConfig: DaffProductMagentoDriverConfig,
    @Inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS) private extraProductFragments: DocumentNode[],
    @Inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS) private extraProductPreviewFragments: DocumentNode[],
    @Inject(MAGENTO_CATEGORY_EXTRA_FRAGMENTS) private extraCategoryFragments: DocumentNode[],
  ) {}

  get(categoryRequest: DaffCategoryIdRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<MagentoProductGetFilterTypesResponse>({
        query: MagentoProductGetFilterTypes,
      }),
      this.apollo.query<MagentoGetCategoryAndProductsResponse>({
        query: MagentoGetCategoryAndProductsQuery(this.extraCategoryFragments, [
          ...this.extraProductFragments,
          ...this.extraProductPreviewFragments,
        ]),
        variables: this.getCategoryAndProductsQueryVariables(categoryRequest),
      }),
    ]).pipe(
      map(([
        filterTypes,
        categoryAndProducts,
      ]) => this.transformCategory(categoryAndProducts.data, filterTypes.data, categoryRequest,this.productConfig.baseMediaUrl)),
      map(result => categoryRequest.filterRequests
        ? applyFiltersOnResponse(categoryRequest.filterRequests, result)
        : result,
      ),
    );
  }

  getByUrl(categoryRequest: DaffCategoryUrlRequest): Observable<DaffGetCategoryResponse> {
    return combineLatest([
      this.apollo.query<MagentoCategoryUrlResolverResponse>({
        query: MagentoResolveCategoryUrl,
        variables: {
          url: categoryRequest.url,
        },
      }),
      this.apollo.query<MagentoProductGetFilterTypesResponse>({
        query: MagentoProductGetFilterTypes,
      }),
    ]).pipe(
      switchMap(([
        category,
        filterTypes,
      ]) => this.apollo.query<MagentoGetCategoryAndProductsResponse>({
        query: MagentoGetCategoryAndProductsQuery(this.extraCategoryFragments, [
          ...this.extraProductFragments,
          ...this.extraProductPreviewFragments,
        ]),
        variables: this.getCategoryAndProductsQueryVariables({
          ...categoryRequest,
          id: category.data.route?.uid,
          kind: DaffCategoryRequestKind.ID,
        }),
      }).pipe(
        map(categoryAndProducts => this.transformCategory(categoryAndProducts.data, filterTypes.data, categoryRequest, this.productConfig.baseMediaUrl)),
        map(result => categoryRequest.filterRequests
          ? applyFiltersOnResponse(categoryRequest.filterRequests, result)
          : result,
        ),
      )),
    );
  }

  private getCategoryAndProductsQueryVariables(request: DaffCategoryIdRequest): MagentoGetCategoryAndProductsRequest {
    const queryVariables = {
      productFilter: this.magentoAppliedFiltersTransformer.transform(request.id, request.filterRequests),
      categoryFilters: {
        category_uid: {
          eq: request.id,
        },
      },
    };
    if(request.pageSize) {
      queryVariables['pageSize'] = request.pageSize;
    }
    if(request.currentPage) {
      queryVariables['currentPage'] = request.currentPage;
    }
    if(request.appliedSortOption && request.appliedSortDirection) {
      queryVariables['sort'] = magentoAppliedSortOptionTransform(request.appliedSortOption, request.appliedSortDirection);
    }

    return queryVariables;
  }

  private transformCategory(
    categoryResponse: MagentoGetCategoryAndProductsResponse,
    filterTypesResponse: MagentoProductGetFilterTypesResponse,
    request: DaffCategoryRequest,
    mediaUrl: string,
  ): DaffGetCategoryResponse {
    const aggregations = addMetadataTypesToProductsResponse(filterTypesResponse, categoryResponse);
    const completeCategory: MagentoCompleteCategoryResponse = {
      category: categoryResponse.categoryList[0],
      products: categoryResponse.products.items,
      aggregates: aggregations.products.aggregations,
      sort_fields: aggregations.products.sort_fields,
      total_count: categoryResponse.products.total_count,
      page_info: categoryResponse.products.page_info,
      appliedSortOption: request.appliedSortOption,
      appliedSortDirection: request.appliedSortDirection,
    };

    return this.magentoCategoryResponseTransformer.transform(completeCategory, mediaUrl);
  }
}

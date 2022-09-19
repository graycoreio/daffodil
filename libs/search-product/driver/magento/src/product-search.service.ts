import {
  Inject,
  Injectable,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import {
  combineLatest,
  Observable,
  throwError,
} from 'rxjs';
import {
  catchError,
  map,
} from 'rxjs/operators';

import { daffApplyRequestsToFilters } from '@daffodil/core';
import {
  magentoProductAddMetadataTypesToAggregates,
  MagentoProductGetFilterTypes,
  MagentoProductGetFilterTypesResponse,
  MagentoProductAppliedFiltersTransformService,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  DaffMagentoProductsTransformer,
  DaffProductMagentoDriverConfig,
  MAGENTO_PRODUCT_CONFIG_TOKEN,
  magentoProductCollectionMetadataTransform,
  magentoAppliedSortOptionTransform,
} from '@daffodil/product/driver/magento';
import { daffSearchTransformResultsToCollection } from '@daffodil/search';
import {
  daffTransformProductsToSearchResults,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';
import {
  DaffSearchProductDriverInterface,
  DaffSearchProductDriverOptions,
  DaffSearchProductDriverResponse,
} from '@daffodil/search-product/driver';

import { transformSearchProductMagentoError } from './errors/transform';
import { MagentoSearchForProductsResponse } from './models/get-product-response.interface';
import { productSearch } from './queries/product-search';

/**
 * A service for searching products in Magento.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchProductMagentoDriver implements DaffSearchProductDriverInterface {
  constructor(
    private apollo: Apollo,
    private productFilterRequestsTransformer: MagentoProductAppliedFiltersTransformService,
    @Inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS) private extraPreviewFragments: DocumentNode[],
    private magentoProductsTransformers: DaffMagentoProductsTransformer,
    @Inject(MAGENTO_PRODUCT_CONFIG_TOKEN) private config: DaffProductMagentoDriverConfig,
  ) {}

  readonly kind = DAFF_SEARCH_PRODUCT_RESULT_KIND;

  search(query: string, options: DaffSearchProductDriverOptions = {}): Observable<DaffSearchProductDriverResponse> {
    const queryVariables = {
      filter: this.productFilterRequestsTransformer.transform(options.filterRequests),
    };
    if (options.pageSize || options.limit) {
      queryVariables['pageSize'] = options.pageSize || options.limit;
    }
    if (options.currentPage) {
      queryVariables['currentPage'] = options.currentPage;
    }
    if (options.appliedSortOption && options.appliedSortDirection) {
      queryVariables['sort'] = magentoAppliedSortOptionTransform(options.appliedSortOption, options.appliedSortDirection);
    }

    return combineLatest([
      this.apollo.query<MagentoSearchForProductsResponse>({
        query: productSearch(this.extraPreviewFragments),
        variables: {
          ...queryVariables,
          search: query,
        },
      }),
      this.apollo.query<MagentoProductGetFilterTypesResponse>({
        query: MagentoProductGetFilterTypes,
      }),
    ]).pipe(
      map(([products, filters]) => ({
        products: products.data.products.items,
        filters: magentoProductAddMetadataTypesToAggregates(
          filters.data.__type.inputFields,
          products.data.products.aggregations,
        ),
        sortFields: products.data.products.sort_fields,
        pageInfo: products.data.products.page_info,
        count: products.data.products.total_count,
      })),
      map(({ products, filters, sortFields, pageInfo, count }) => ({
        products: daffSearchTransformResultsToCollection(daffTransformProductsToSearchResults(
          this.magentoProductsTransformers.transformManyMagentoProducts(products, this.config.baseMediaUrl),
        )),
        metadata: magentoProductCollectionMetadataTransform(
          filters,
          pageInfo,
          sortFields,
          products,
          count,
          options.appliedSortOption,
          options.appliedSortDirection,
        ),
      })),
      map(({ products, metadata }) => ({
        collection: products,
        metadata: {
          ...metadata,
          filters: daffApplyRequestsToFilters(options.filterRequests || [], metadata.filters),
        },
      })),
      catchError(err => throwError(() => transformSearchProductMagentoError(err))),
    );
  }
}

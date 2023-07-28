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
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM,
  DaffMagentoProductTransform,
} from '@daffodil/product/driver/magento';
import {
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  daffTransformProductsToSearchResults,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
  DaffSearchProductResult,
} from '@daffodil/search-product';
import {
  DaffSearchProductDriverInterface,
  DaffSearchProductDriverOptions,
  DaffSearchProductDriverResponse,
} from '@daffodil/search-product/driver';
import { DaffSearchDriverOptions } from '@daffodil/search/driver';

import { transformSearchProductMagentoError } from './errors/transform';
import {
  MagentoSearchForProductsResponse,
  MagentoSearchProductIncrementalResponse,
} from './models/public_api';
import {
  daffSearchProductIncrementalQuery,
  productSearch,
} from './queries/public_api';

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
    @Inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS) private extraFragments: DocumentNode[],
    @Inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS) private extraPreviewFragments: DocumentNode[],
    private magentoProductsTransformers: DaffMagentoProductsTransformer,
    @Inject(MAGENTO_PRODUCT_CONFIG_TOKEN) private config: DaffProductMagentoDriverConfig,
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM) private magentoProductsTransform: DaffMagentoProductTransform,
  ) {}

  readonly kind = DAFF_SEARCH_PRODUCT_RESULT_KIND;

  private getVariables(options: DaffSearchProductDriverOptions = {}) {
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
    return queryVariables;
  }

  search(query: string, options: DaffSearchProductDriverOptions = {}): Observable<DaffSearchProductDriverResponse> {
    const queryVariables = this.getVariables(options);

    return combineLatest([
      this.apollo.query<MagentoSearchForProductsResponse>({
        query: productSearch([
          ...this.extraPreviewFragments,
          ...this.extraFragments,
        ]),
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
          products.map((product) => this.magentoProductsTransform(product, this.config.baseMediaUrl)),
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

  incremental(query: string, options: DaffSearchProductDriverOptions = {}): Observable<DaffSearchResultCollection<DaffSearchProductResult>> {
    return this.apollo.query<MagentoSearchProductIncrementalResponse>({
      query: daffSearchProductIncrementalQuery(this.extraPreviewFragments),
      variables: {
        search: query,
        pageSize: options.pageSize || options.limit,
      },
    }).pipe(
      map(({ data }) => daffSearchTransformResultsToCollection(daffTransformProductsToSearchResults(
        this.magentoProductsTransformers.transformManyMagentoProducts(data.products.items, this.config.baseMediaUrl),
      ))),
      catchError(err => throwError(() => transformSearchProductMagentoError(err))),
    );
  }
}

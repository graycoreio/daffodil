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

import {
  daffApplyRequestsToFilters,
  daffProductFilterArrayToDict,
} from '@daffodil/product';
import {
  magentoProductAddMetadataTypesToAggregates,
  MagentoProductGetFilterTypes,
  MagentoProductGetFilterTypesResponse,
  magentoProductTransformAggregate,
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
      filter: this.productFilterRequestsTransformer.transform(options.filter_requests),
    };
    if (options.page_size || options.limit) {
      queryVariables['pageSize'] = options.page_size || options.limit;
    }
    if (options.current_page) {
      queryVariables['currentPage'] = options.current_page;
    }
    if (options.applied_sort_option && options.applied_sort_direction) {
      queryVariables['sort'] = magentoAppliedSortOptionTransform(options.applied_sort_option, options.applied_sort_direction);
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
        products: this.magentoProductsTransformers.transformManyMagentoProducts(products.data.products.items, this.config.baseMediaUrl),
        filters: magentoProductAddMetadataTypesToAggregates(
          filters.data.__type.inputFields,
          products.data.products.aggregations,
        ),
        sortFields: products.data.products.sort_fields,
        pageInfo: products.data.products.page_info,
        count: products.data.products.total_count,
      })),
      map(({ products, filters, sortFields, pageInfo, count }) => ({
        products: daffSearchTransformResultsToCollection(daffTransformProductsToSearchResults(products)),
        metadata: magentoProductCollectionMetadataTransform(
          filters,
          pageInfo,
          sortFields,
          count,
          options.applied_sort_option,
          options.applied_sort_direction,
        ),
      })),
      map(({ products, metadata }) => ({
        collection: products,
        metadata: {
          ...metadata,
          filters: daffApplyRequestsToFilters(options.filter_requests || [], metadata.filters),
        },
      })),
      catchError(err => throwError(() => transformSearchProductMagentoError(err))),
    );
  }
}

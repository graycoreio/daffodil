import { DaffGetCategoryResponse } from '@daffodil/category';
import { DaffSortDirectionEnum } from '@daffodil/core';
import { ShopifyCategory } from '@daffodil/driver/shopify';
import { ShopifyProductCollectionSortKeys } from '@daffodil/driver/shopify';
import { daffShopifyProductTransformer } from '@daffodil/product/driver/shopify';

import { daffShopifyProductFiltersTransformer } from './shopify-daff-product-filters-transform';
import { ShopifyCollectionProductVariables } from '../queries/public_api';

/**
 * Transforms a {@link ShopifyCategory} into a {@link DaffGetCategoryResponse} object.
 *
 * @param collection
 * @param variables - variables used in getCategory/getCategoryByUrl request query
 */
export const daffShopifyCategoryTransformer = (collection: ShopifyCategory, variables: ShopifyCollectionProductVariables): DaffGetCategoryResponse => ({
  products: collection.products.nodes.map(daffShopifyProductTransformer),
  category:  {
    name: collection.title,
    description: collection.description,
    product_ids: collection.products.nodes.map(node => node.id),
    url: `/Collection/${collection.handle}`,
    id: `/${collection.id}`,
    meta_description: collection.description,
    meta_title: collection.title,
    children_count: 0,
    children: [],
    breadcrumbs: [
      {
        id: `/`,
        url: `/`,
        name: 'Store',
        level: 0,
      },
      {
        id: `/${collection.id}`,
        url: `/Collection/${collection.handle}`,
        name: collection.title,
        level: 1,
      },
    ],
  },
  categoryPageMetadata: {
    id: `/${collection.id}`,
    ids: collection.products.nodes.map(node => node.id),
    currentPage: 1,
    totalPages: 1,
    pageSize: variables.first,
    count: undefined,
    sortOptions: {
      default: ShopifyProductCollectionSortKeys.CollectionDefault,
      options: Object.entries(ShopifyProductCollectionSortKeys).map(([label, value]) => ({ label, value })),
    },
    appliedSortOption: {
      label: variables.sortKey,
      value: variables.sortKey,
    },
    appliedSortDirection: variables.reverse ? DaffSortDirectionEnum.Descending : DaffSortDirectionEnum.Ascending,
    filters: daffShopifyProductFiltersTransformer(variables.filters, collection.products.filters),
  },
});

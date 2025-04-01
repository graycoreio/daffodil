import { DaffGetCategoryResponse } from '@daffodil/category';
import { DaffSortDirectionEnum } from '@daffodil/core';
import {
  ShopifyCategory,
  shopifyProductCollectionSortKeyValidator,
} from '@daffodil/driver/shopify';
import { ShopifyProductCollectionSortKeys } from '@daffodil/driver/shopify';
import { daffShopifyProductTransformer } from '@daffodil/product/driver/shopify';

import { daffShopifyProductFilterTransformer } from './shopify-daff-product-filter-transform';
import { ShopifyCollectionProductVariables } from '../queries/public_api';


/**
 * Transforms a {@link ShopifyCategory} into a {@link DaffGetCategoryResponse} object.
 *
 * @param collection - {@link ShopifyCategory} object
 * @param variables - {@link ShopifyCollectionProductVariables} object for sorting and filtering products in the given collection
 * @returns A {@link DaffGetCategoryResponse} object
 */
export const daffShopifyCategoryTransformer = (collection: ShopifyCategory, variables: ShopifyCollectionProductVariables): DaffGetCategoryResponse => ({
  products: collection.products.nodes.map(daffShopifyProductTransformer),
  category:  {
    name: collection.title,
    description: collection.description,
    total_products: collection.products.nodes.length,
    product_ids: collection.products.nodes.map(node => node.id),
    url: collection.id,
    id: `/${collection.handle}`,
    meta_description: '',
    meta_title: '',
    children_count: 0,
    children: [],
    breadcrumbs: [],
  },
  categoryPageMetadata: {
    id: `/${collection.handle}`,
    ids: collection.products.nodes.map(node => node.id),
    currentPage: 0,
    totalPages: 0,
    pageSize: 0,
    count: 0,
    sortOptions: {
      default: ShopifyProductCollectionSortKeys.CollectionDefault,
      options: Object.entries(ShopifyProductCollectionSortKeys).map(([label, value]) => ({ label,value })),
    },
    appliedSortOption: {
      label: variables.sortKey,
      value: shopifyProductCollectionSortKeyValidator(variables.sortKey),
    },
    appliedSortDirection: variables.reverse ? DaffSortDirectionEnum.Descending : DaffSortDirectionEnum.Ascending,
    filters: daffShopifyProductFilterTransformer(variables.filters),
  },
});

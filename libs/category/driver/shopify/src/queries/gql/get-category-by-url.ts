import { gql } from 'apollo-angular';

import {
  shopifyCollectionCoreFragment,
  shopifyCollectionFiltersFragment,
  shopifyImageFragment,
  shopifyProductCoreFragment,
  shopifyProductPriceRangeFragment,
} from '@daffodil/driver/shopify';

import { ShopifyCategoryResponse } from '../response.types';
import { ShopifyCategoryUrlVariables } from '../variables.types';

/**
 * GraphQL query object for getting a category (Shopify Collection) by url (handle).
 */
export const getCategoryByUrl = gql<ShopifyCategoryResponse, ShopifyCategoryUrlVariables>`
  query GetCategoryByUrl($handle: String!, $reverse: Boolean, $sortKey: ProductCollectionSortKeys, $filters: [ProductFilter!]!, $first: Int) {
    collection(handle: $handle) {
      ...collectionCoreFragment
      image {
        ...imageFragment
      }
      products(first: $first, reverse: $reverse, sortKey: $sortKey, filters: $filters) { 
        nodes { 
          ...productCoreFragment
          ...productPriceRangeFragment
        } 
        filters {
          ...collectionFiltersFragment
        }
      } 
    }
  }
  ${shopifyCollectionCoreFragment}
  ${shopifyImageFragment}
  ${shopifyProductCoreFragment}
  ${shopifyProductPriceRangeFragment}
  ${shopifyCollectionFiltersFragment}
`;

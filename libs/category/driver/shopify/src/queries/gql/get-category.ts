import { gql } from 'apollo-angular';

import {
  shopifyCollectionCoreFragment,
  shopifyCollectionFiltersFragment,
  shopifyImageFragment,
  shopifyProductCoreFragment,
  shopifyProductPriceRangeFragment,
} from '@daffodil/driver/shopify';

import { ShopifyCategoryResponse } from '../response.types';
import { ShopifyCategoryIDVariables } from '../variables.types';

/**
 * GraphQL query object for getting a category (Shopify Collection) by ID.
 */
export const getCategory = gql<ShopifyCategoryResponse, ShopifyCategoryIDVariables>`
  query GetACategory($id: ID, $reverse: Boolean, $sortKey: ProductCollectionSortKeys, $filters: [ProductFilter!]!, $first: Int) {
    collection(id: $id) {
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

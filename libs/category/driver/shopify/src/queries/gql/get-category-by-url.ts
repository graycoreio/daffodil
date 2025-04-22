import { gql } from 'apollo-angular';

import { ShopifyCategoryResponse } from '../response.types';
import { ShopifyCategoryUrlVariables } from '../variables.types';

/**
 * GraphQL query object for getting a category (Shopify Collection) by url (handle).
 */
export const getCategoryByUrl = gql<ShopifyCategoryResponse, ShopifyCategoryUrlVariables>`
  query GetCategoryByUrl($handle: String!, $reverse: Boolean, $sortKey: ProductCollectionSortKeys, $filters: [ProductFilter!]!, $first: Int) {
    collection(handle: $handle) {
      handle
      id
      title
      description
      onlineStoreUrl
      image { 
        altText 
        id 
        url 
      } 
      products(first: $first, reverse: $reverse, sortKey: $sortKey, filters: $filters) {
        nodes { 
          handle
          onlineStoreUrl
          availableForSale
          priceRange { 
            maxVariantPrice { 
              amount 
              currencyCode 
            } 
            minVariantPrice { 
              amount 
              currencyCode 
            } 
          } 
          id
          title
          description
          images(first: 1) { 
            nodes { 
              id 
              url 
              altText 
            } 
          } 
        },
        filters {
            id
            label
            presentation
            type
            values {
                count
                id
                label
                input
            }
        }
      } 
    }
  }
`;

import { gql } from 'apollo-angular';

import { ShopifyCategoryResponse } from '../response.types';
import { ShopifyCategoryIDVariables } from '../variables.types';

/**
 * GraphQL query object for getting a category (Shopify Collection) by ID.
 */
export const getCategory = gql<ShopifyCategoryResponse, ShopifyCategoryIDVariables>`
  query GetACategory($id: ID, $reverse: Boolean, $sortKey: ProductCollectionSortKeys, $filters: [ProductFilter!]!, $first: Int) {
    collection(id: $id) {
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
        } 
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

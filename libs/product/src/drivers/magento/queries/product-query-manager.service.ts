import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { QueryOptions } from 'apollo-client';
import { DaffMagentoProductQueryManagerInterface } from '../interfaces/magento-product-query-manager.interface';

/**
 * The query manager for making magento product graphQL queries.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductGraphQlQueryManagerService implements DaffMagentoProductQueryManagerInterface {

  /**
   * Get a single product by identifier.
   * @param identifier A product identifier.
   */
  getAProductQuery(identifier: string) : QueryOptions {
    return {
      query:  gql`
      query GetAProduct($sku: String!){
        storeConfig {
          secure_base_media_url
        }
        products(filter: {
          sku: {
            eq: $sku
          }
        }){
          items {
            id
            url_key
            name
            sku
            image {
              url
              label
            }
            media_gallery_entries {
              label
              file
              position
              disabled
              id
            }
            short_description {
              html
            }
            description {
              html
            }
          }
        }
      }`,
      variables: {
        sku: identifier
      }
    };
  }

  /**
   * Get all products.
   */
  getAllProductsQuery() : QueryOptions {
    return {
      query: gql`
      query GetAllProducts($pageSize: Int)
      {
        products(search: "Shirt", pageSize: $pageSize)
        {
          total_count
          items {
            id
            name
            sku
            url_key
            image {
              url
              label
            }
            price {
              regularPrice {
                amount {
                  value
                  currency
                }
              }
            }
          }
          page_info {
            page_size
            current_page
          }
        }
      }`
    }
  }

  getSortFieldsAndFiltersByCategory(categoryId) : QueryOptions {
    return {
      query: gql`
      query getSortFieldsAndFiltersByCategory($categoryId: String!)
      {
        products(
          filter: {
            category_id: {
              eq: $categoryId
            }
          }
        )
        {
          sort_fields {
            default
            options {
              label
              value
            }
          }
          filters {
            name
            filter_items_count
            request_var
            filter_items {
              label
              value_string
              items_count
            }
          }
        }
      }`,
      variables: {
        categoryId: categoryId
      }
    }
  }
}

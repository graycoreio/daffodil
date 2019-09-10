import { Injectable } from '@angular/core';
import { DaffProductQueryManagerInterface } from '../../interfaces/product-query-manager.interface';
import gql from 'graphql-tag';
import { QueryOptions } from 'apollo-client';
import { DaffProductMagentoDriverModule } from '../product-driver.module';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductGraphQlQueryManagerService implements DaffProductQueryManagerInterface {

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
}

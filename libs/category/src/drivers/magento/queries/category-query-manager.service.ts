import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { QueryOptions } from 'apollo-client';

import { DaffCategoryQueryManagerInterface } from '../../interfaces/category-query-manager.interface';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryGraphQlQueryManagerService implements DaffCategoryQueryManagerInterface {

  getACategoryQuery(identifier: number) : QueryOptions {
    return {
      query:  gql`
      query GetACategory($id: Int){
        category(id: $id) {
          id
          name
          breadcrumbs {
            category_id
            category_name
            category_level
            category_url_key
          }
          products {
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
          }
          children_count
        }
      }`,
      variables: {
        id: identifier
      }
    };
  }
}

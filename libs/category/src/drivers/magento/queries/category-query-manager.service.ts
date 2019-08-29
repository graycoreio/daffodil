import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { QueryOptions } from 'apollo-client';

import { DaffCategoryQueryManagerInterface } from '../../interfaces/category-query-manager.interface';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryGraphQlQueryManagerService implements DaffCategoryQueryManagerInterface {

  getACategoryQuery(identifier: string) : QueryOptions {
    return {
      query:  gql`
      query GetACategory($id: ID!){
        category(id: $id) {
          id
          name
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
          children {
            id
            level
            name
            path
          }
        }
      }`,
      variables: {
        id: identifier
      }
    };
  }
}

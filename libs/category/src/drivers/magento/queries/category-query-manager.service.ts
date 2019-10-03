import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { QueryOptions } from 'apollo-client';

import { DaffCategoryQueryManagerInterface } from '../../interfaces/category-query-manager.interface';
import { ProductSortInput } from '../models/inputs/product-sort-input';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryGraphQlQueryManagerService implements DaffCategoryQueryManagerInterface {

  getACategoryQuery(identifier: number, pageNumber?: number, pageSize?: number, sort?: ProductSortInput) : QueryOptions {
    return {
      query:  gql`
      query GetACategory($id: Int!, $pageNumber: Int, $pageSize: Int, $sort: ProductSortInput ){
        category(id: $id) {
          id
          name
          breadcrumbs {
            category_id
            category_name
            category_level
            category_url_key
          }
          products(
            currentPage: $pageNumber
            pageSize: $pageSize
            sort: $sort
          ) {
            total_count
            page_info {
                current_page
                page_size
                total_pages
            }
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
        id: identifier,
        pageNumber: pageNumber,
        pageSize: pageSize,
        sort: sort
      }
    };
  }
}

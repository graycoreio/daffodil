import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { DaffProduct } from '../../models/product';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';

interface MagentoGraph {
  products?: MagentoProductsGraph
}

interface MagentoProductNode {
  sku?: string;
  name?: string;
  image: {
    url: string;
  }
}

interface MagentoProductsGraph {
  total_count: number;
  items: MagentoProductNode[];
}

interface Variables {
  first: number
};


export const GetAllProductsQuery = gql`
  query GetAllProducts($pageSize: Int)
  {
    products(search: "Shirt", pageSize: $pageSize)
    {
      total_count
      items {
        id
        name
        sku
        image {
          url
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
  }
`;

export const GetAProduct = gql`
  query GetAProduct($sku: String!){
    products(filter: {sku: {
      eq: $sku
    }}){
      items {
        id
        name
        sku
        image {
          url
        }
        short_description {
          html
        }
      }
    }
  }
`;

export const DaffMagentoProductTransformer = (node: MagentoProductNode) : DaffProduct => {
  return {
    id: node.sku,
    name: node.name,
    images: [{...node.image, id: "1", label: "Something"}]
  }
}

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductService implements DaffProductServiceInterface {

  defaultLength = 20;
  
  constructor(private apollo: Apollo) {}

  getAll(): Observable<DaffProduct[]> {
    return this.apollo.query<MagentoGraph>({
      query: GetAllProductsQuery,
      variables: {
        pageSize: 10
      }
    }).pipe(
      map(result => result.data.products.items.map(item => DaffMagentoProductTransformer(item)))
    );
  }

  //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
  getBestSellers(): Observable<DaffProduct[]> {
    return of(null);
  //   return this.apollo.query<GetAllProductsResponse>({
  //     query: GetAllProductsQuery,
  //     variables: {
  //       length: this.defaultLength
  //     }
  //   }).pipe(
  //     map(result => {
  //       return result.data.shop.products.edges.map(edge => DaffMagentoProductTransformer(edge.node))
  //     })
  //   );
  }

  get(productId: string): Observable<DaffProduct> {
    return this.apollo.query<MagentoGraph>({
      query: GetAProduct,
      variables: {
        sku: productId
      }
    }).pipe(
      map(result => DaffMagentoProductTransformer(result.data.products.items[0]))
    );
  }
}

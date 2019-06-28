import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { DaffProduct } from '../../models/product';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';

interface GetAllProductsResponse {
  shop?: ShopGraph
}

interface GetAProductResponse {
  node: ProductNode
}

interface ShopGraph {
  products?: ProductGraph
}

interface ProductGraph {
  edges: ProductEdge[]
}

interface ProductEdge {
  node: ProductNode
}

interface ProductNode {
  id: string;
  title?: string;
  price?: string;
}

interface Variables {
  first: number
};



export const GetAllProductsQuery = gql`
  {
    products(
      search: "Yoga pants"
      pageSize: 10
    )
    {
      total_count
      items {
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

// export const GetAProduct = gql`
//   query GetAProduct($id: ID!){
//     node(id: $id) {
//       id
//       ... on Product {
//         title
//       }
//     }
//   }
// `;

export const DaffMagentoProductTransformer = (node: ProductNode) : DaffProduct => {
  return {
    id: node.id,
    name: node.title
  }
}

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductService implements DaffProductServiceInterface {

  defaultLength = 20;
  
  constructor(private apollo: Apollo) {}

  getAll(): Observable<DaffProduct[]> {
    console.log('magento getAll call');
    return this.apollo.query<any>({
      query: GetAllProductsQuery
    }).pipe(
      map(result => {
        console.log(result);
        return null;
      })
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
    return of(null);
  //   return this.apollo.query<GetAProductResponse>({
  //     query: GetAProduct,
  //     variables: {
  //       id: productId
  //     }
  //   }).pipe(
  //     map(result => DaffMagentoProductTransformer(result.data.node))
  //   );
  }
}

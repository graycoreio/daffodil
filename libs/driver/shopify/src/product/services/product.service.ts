import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { Product } from '@daffodil/core';
import { DaffProductServiceInterface } from '@daffodil/driver';

interface GetAllProductsResponse {
  shop?: ShopGraph
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

type Variables = {
  first: number
};



const GetAllProducts = gql`
  query GetAllProducts {
    shop {
      products(first: 200)  {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;

const GetAProduct = (productId) => gql`
  {
    product(id:) {
      id
      title
    }
  }
`;

export const DaffShopifyProductTransformer = (edge: ProductEdge) : Product => {
  return {
    id: edge.node.id,
    name: edge.node.title
  }
}

@Injectable({
  providedIn: 'root'
})
export class DaffShopifyProductService implements DaffProductServiceInterface {
  
  constructor(private apollo: Apollo) {}

  getAll(): Observable<Product[]> {
    return this.apollo.query<GetAllProductsResponse>({
      query: GetAllProducts
    }).pipe(
      map(result => {
        console.log(result.data);
        return result.data.shop.products.edges.map(edge => DaffShopifyProductTransformer(edge))
      }),
      tap((result) => console.log(result))
    );
  }

  get(productId: string): Observable<Product> {
    return this.apollo.query<Product>({
      query: GetAProduct(productId)
    }).pipe(
      map(result => {
        return result.data;
      })
    );
  }
}

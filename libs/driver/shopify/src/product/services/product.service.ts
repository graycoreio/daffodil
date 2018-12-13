import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '@daffodil/productCore';
import { DaffProductServiceInterface } from '@daffodil/driver';

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

type Variables = {
  first: number
};



export const GetAllProductsQuery = gql`
  query GetAllProducts($length: Int) {
    shop {
      products(first: $length)  {
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

export const GetAProduct = gql`
  query GetAProduct($id: ID!){
    node(id: $id) {
      id
      ... on Product {
        title
      }
    }
  }
`;

export const DaffShopifyProductTransformer = (node: ProductNode) : Product => {
  return {
    id: node.id,
    name: node.title
  }
}

@Injectable({
  providedIn: 'root'
})
export class DaffShopifyProductService implements DaffProductServiceInterface {

  defaultLength: number = 20;
  
  constructor(private apollo: Apollo) {}

  getAll(): Observable<Product[]> {
    return this.apollo.query<GetAllProductsResponse>({
      query: GetAllProductsQuery,
      variables: {
        length: this.defaultLength
      }
    }).pipe(
      map(result => {
        return result.data.shop.products.edges.map(edge => DaffShopifyProductTransformer(edge.node))
      })
    );
  }

  //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
  getBestSellers(): Observable<Product[]> {
    return this.apollo.query<GetAllProductsResponse>({
      query: GetAllProductsQuery,
      variables: {
        length: this.defaultLength
      }
    }).pipe(
      map(result => {
        return result.data.shop.products.edges.map(edge => DaffShopifyProductTransformer(edge.node))
      })
    );
  }

  get(productId: string): Observable<Product> {
    console.log(productId);
    return this.apollo.query<GetAProductResponse>({
      query: GetAProduct,
      variables: {
        id: productId
      }
    }).pipe(
      map(result => DaffShopifyProductTransformer(result.data.node))
    );
  }
}

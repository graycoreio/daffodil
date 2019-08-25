import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { DaffProduct } from '../../models/product';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
import { DaffProductUnion } from '../../models/product-union';

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

export const DaffShopifyProductTransformer = (node: ProductNode) : DaffProduct => {
  return {
    id: node.id,
    name: node.title
  }
}

@Injectable({
  providedIn: 'root'
})
export class DaffShopifyProductService implements DaffProductServiceInterface<DaffProductUnion> {

  defaultLength = 20;
  
  constructor(private apollo: Apollo) {}

  getAll(): Observable<DaffProduct[]> {
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
  getBestSellers(): Observable<DaffProduct[]> {
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

  get(productId: string): Observable<DaffProduct> {
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

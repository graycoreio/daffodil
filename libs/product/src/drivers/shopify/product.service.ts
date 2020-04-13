import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
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


/**
 * GraphQL query object for getting all products.
 */
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

/**
 * GraphQL query object for getting a product by ID.
 */
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

/**
 * Transforms a ProductNode into a different object.
 * 
 * @param node - ProductNode object
 * @returns A Product object
 */
export const DaffShopifyProductTransformer = (node: ProductNode) : DaffProduct => {
  return {
    id: node.id,
    name: node.title
  }
}

/**
 * A service for getting DaffProducts from apollo shopify product requests.
 * 
 * @Param apollo
 */
@Injectable({
  providedIn: 'root'
})
export class DaffShopifyProductService implements DaffProductServiceInterface<DaffProduct> {

  defaultLength = 20;
  
  constructor(private apollo: Apollo) {}

  /**
   * A query for retrieving all Products as an Observable<DaffProduct[]>.
   * 
   * @returns Observable<Product[]>
   */
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

  /**
   * A query for retrieving a particular product as an Observable<DaffProduct>.
   * 
   * @param productId - A product ID
   * @returns Observable<Product>
   */
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

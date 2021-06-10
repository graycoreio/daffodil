import { Injectable } from '@angular/core';
import {
  Apollo,
  gql,
} from 'apollo-angular';
import {
  Observable,
  of,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffProduct } from '@daffodil/product';
import { DaffProductServiceInterface } from '@daffodil/product/driver';

interface GetAllProductsResponse {
  shop?: ShopGraph;
}

interface GetAProductResponse {
  node: ProductNode;
}

interface ShopGraph {
  products?: ProductGraph;
}

interface ProductGraph {
  edges: ProductEdge[];
}

interface ProductEdge {
  node: ProductNode;
}

interface ProductNode {
  __typename?: 'Product';
  id: string;
  title?: string;
  price?: string;
}

interface Variables {
  first: number;
};


/**
 * GraphQL query object for getting all products.
 */
export const GetAllProductsQuery = gql`
  query ShopifyGetAllProducts($length: Int) {
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
  query ShopifyGetAProduct($id: ID!){
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
export const DaffShopifyProductTransformer = (node: ProductNode): DaffProduct => ({
  id: node.id,
  url: null,
  name: node.title,
  images: [],
});

/**
 * A service for getting DaffProducts from apollo shopify product requests.
 *
 * @inheritdoc
 * @Param apollo
 */
@Injectable({
  providedIn: 'root',
})
export class DaffShopifyProductService implements DaffProductServiceInterface {

  defaultLength = 20;

  constructor(private apollo: Apollo) {}

  getByUrl(url: DaffProduct['url']): Observable<DaffProduct> {
    // TODO: implement
    return of();
  }

  getAll(): Observable<DaffProduct[]> {
    return this.apollo.query<GetAllProductsResponse>({
      query: GetAllProductsQuery,
      variables: {
        length: this.defaultLength,
      },
    }).pipe(
      map(result => result.data.shop.products.edges.map(edge => DaffShopifyProductTransformer(edge.node))),
    );
  }

  //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
  getBestSellers(): Observable<DaffProduct[]> {
    return this.apollo.query<GetAllProductsResponse>({
      query: GetAllProductsQuery,
      variables: {
        length: this.defaultLength,
      },
    }).pipe(
      map(result => result.data.shop.products.edges.map(edge => DaffShopifyProductTransformer(edge.node))),
    );
  }

  get(productId: string): Observable<DaffProduct> {
    return this.apollo.query<GetAProductResponse>({
      query: GetAProduct,
      variables: {
        id: productId,
      },
    }).pipe(
      map(result => DaffShopifyProductTransformer(result.data.node)),
    );
  }
}

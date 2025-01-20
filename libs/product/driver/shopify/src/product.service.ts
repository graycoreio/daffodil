import { Injectable } from '@angular/core';
import {
  Apollo,
  gql,
} from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

interface GetAllProductsResponse {
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
  title: string;
  description: string;
  onlineStoreUrl: string;
  priceRange: {
    maxVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  images: {
    nodes: {
      id: string;
      url: string;
      altText: string;
    }[];
  };
}

/**
 * GraphQL query object for getting all products.
 */
export const GetAllProductsQuery = gql`
  query ShopifyGetAllProducts($length: Int) {
    products(first: $length)  {
      edges {
        node {
          onlineStoreUrl
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          id
          title
          description
          images(first: 1) {
            nodes {
              id
              url
              altText
            }
          }
        }
      }
    }
  }
`;

// To be implemented properly later
export const GetAProduct = GetAllProductsQuery;

/**
 * Transforms a ProductNode into a different object.
 *
 * @param node - ProductNode object
 * @returns A Product object
 */

const DaffShopifyProductTransformer = (node: ProductNode): DaffProduct => ({
  name: node.title,
  images: node.images.nodes.map(imageNode => ({
    id: imageNode.id,
    url: imageNode.url,
    label: imageNode.altText,
  })),
  thumbnail: {
    url: node.images.nodes[0].url,
    label: node.images.nodes[0].altText,
    id: node.images.nodes[0].id,
  },
  id: node.id,
  url: node.onlineStoreUrl,
  type: DaffProductTypeEnum.Simple,
  price: node.priceRange.maxVariantPrice.amount,
  description: node.description,
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
export class DaffShopifyProductService
implements DaffProductServiceInterface {
  defaultLength = 20;

  constructor(private apollo: Apollo) {}

  getAll(): Observable<DaffProduct[]> {
    return this.apollo
      .query<GetAllProductsResponse>({
        query: GetAllProductsQuery,
        variables: {
          length: this.defaultLength,
        },
      })
      .pipe(
        map((result) => {
          const edges = result.data?.products?.edges || [];
          return edges.map((edge) => DaffShopifyProductTransformer(edge.node));
        }),
      );
  }

  // Following methods not yet implemented - could be defaulted to the getAll() method for testing
  getBestSellers(): Observable<DaffProduct[]> {
    throw new Error('Method not implemented.');
  }
  get(productId: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    throw new Error('Method not implemented.');
  }
  getByUrl(url: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    throw new Error('Method not implemented.');
  }
}

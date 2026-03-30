import { gql } from 'apollo-angular';

import {
  shopifyImageFragment,
  shopifyProductCoreFragment,
  shopifyProductPriceRangeFragment,
} from '@daffodil/driver/shopify';

import { ShopifyProductAllResponse } from '../response.types';
import { ShopifyProductAllVariables } from '../variables.types';

/**
 * GraphQL query object for getting all products.
 */
export const getAllProducts = gql<ShopifyProductAllResponse, ShopifyProductAllVariables>`
	query GetAllProducts($length: Int) {
		products(first: $length)  {
			nodes {
				...productCoreFragment
				priceRange {
					...productPriceRangeFragment
				}
				images(first: 1) {
					nodes {
						...imageFragment
					}
				}
			}
		}
	}
	${shopifyProductCoreFragment}
	${shopifyProductPriceRangeFragment}
	${shopifyImageFragment}
`;

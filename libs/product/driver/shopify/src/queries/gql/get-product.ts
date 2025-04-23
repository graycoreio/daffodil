import { gql } from 'apollo-angular';

import {
  shopifyImageFragment,
  shopifyProductCoreFragment,
  shopifyProductPriceRangeFragment,
} from '@daffodil/driver/shopify';

import { ShopifyProductSingleResponse } from '../response.types';
import { ShopifyProductIDVariables } from '../variables.types';

/**
 * GraphQL query object for getting a single product by ID.
 */
export const getProduct = gql<ShopifyProductSingleResponse, ShopifyProductIDVariables>`
 query GetAProduct($id: ID!) {
	 product(id: $id) {
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
 ${shopifyProductCoreFragment}
 ${shopifyProductPriceRangeFragment}
 ${shopifyImageFragment}
`;

import { gql } from 'apollo-angular';

import {
  shopifyImageFragment,
  shopifyProductCoreFragment,
  shopifyProductPriceRangeFragment,
} from '@daffodil/driver/shopify';

import { ShopifyProductSingleResponse } from '../response.types';
import { ShopifyProductUrlVariables } from '../variables.types';

/**
 * GraphQL query object for getting a product by URL.
 *
 * The DaffLocatable url is transformed into a Shopify product handle for querying.
 */
export const getProductByUrl = gql<ShopifyProductSingleResponse, ShopifyProductUrlVariables>`
 query GetProductByURL($handle: String!) {
	 product(handle: $handle) {
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

import { gql } from 'apollo-angular';

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
		 handle
		 id
		 title
		 description
		 availableForSale
		 priceRange {
			 maxVariantPrice {
				 amount
				 currencyCode
			 }
			 minVariantPrice {
						amount
						currencyCode
			 }
		 }
		 images(first: 1) {
			 nodes {
				 id
				 url
				 altText
			 }
		 }
		 onlineStoreUrl
	 }
 }
`;

import { gql } from 'apollo-angular';

import { ShopifyProductSingleResponse } from '../response.types';
import { ShopifyProductIDVariables } from '../variables.types';

/**
 * GraphQL query object for getting a single product by ID.
 */
export const getProduct = gql<ShopifyProductSingleResponse, ShopifyProductIDVariables>`
 query GetAProduct($id: ID!) {
	 product(id: $id) {
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

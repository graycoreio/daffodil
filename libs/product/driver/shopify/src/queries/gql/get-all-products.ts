import { gql } from 'apollo-angular';

import { ShopifyProductAllResponse } from '../response.types';
import { ShopifyProductAllVariables } from '../variables.types';

/**
 * GraphQL query object for getting all products.
 */
export const getAllProducts = gql<ShopifyProductAllResponse, ShopifyProductAllVariables>`
	query GetAllProducts($length: Int) {
		products(first: $length)  {
			nodes {
				handle
				onlineStoreUrl
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
`;

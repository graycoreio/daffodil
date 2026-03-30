import { gql } from 'apollo-angular';

export const shopifyProductPriceRangeFragment = gql`
	fragment productPriceRangeFragment on ProductPriceRange {
		maxVariantPrice { 
			amount 
			currencyCode 
		} 
		minVariantPrice { 
			amount 
			currencyCode 
		} 
	}
`;

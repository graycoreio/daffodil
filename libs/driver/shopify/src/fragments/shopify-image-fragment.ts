import { gql } from 'apollo-angular';

export const shopifyImageFragment = gql`
	fragment imageFragment on Image {
		altText 
		id 
		url 
	}
`;

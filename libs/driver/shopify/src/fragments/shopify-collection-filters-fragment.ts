import { gql } from 'apollo-angular';

export const shopifyCollectionFiltersFragment = gql`
	fragment collectionFiltersFragment on Filter {
		id
		label
		presentation
		type
		values {
				count
				id
				label
				input
		}
	}
`;

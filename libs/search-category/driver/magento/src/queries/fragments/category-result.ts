import { gql } from 'apollo-angular';

export const magentoSearchCategoryResultFragment = gql`
  fragment categoryResult on CategoryTree {
    uid
    url_path
    url_suffix
		name
		description
		products {
			items {
				sku
			}
		}
  }
`;

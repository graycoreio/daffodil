import { gql } from 'apollo-angular';

export const magentoCategoryFragment = gql`
  fragment category on CategoryInterface {
    uid
    url_path
    url_suffix
    canonical_url
		name
		level
		meta_title
		meta_description
		description
		breadcrumbs {
			category_uid
			category_name
			category_level
			category_url_path
		}
		products {
			items {
				sku
			}
		}
  }
`;

import { gql } from '@damienwebdev/apollo-angular';

export const magentoCategoryTreeFragment = gql`
  fragment categoryTree on CategoryTree {
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
		children_count
  }
`;

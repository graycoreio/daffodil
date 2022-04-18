import { gql } from 'apollo-angular';

export const DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME = 'MagentoResolveUrlv243';

/**
 * This query retrieves a URL resolution from Magento and informs you about
 * what type of route the URL is.
 */
export const MagentoResolveUrlv243 = gql`
	query ${DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME}($url: String!) {
		route(url: $url) {
			relative_url
			redirect_code
			type
			... on CategoryInterface {
				uid
				name
				meta_description
				meta_title
				canonical_url
			}
			... on ProductInterface {
				uid
				name
				meta_description
				meta_title
				canonical_url
			}
		}
	}
`;

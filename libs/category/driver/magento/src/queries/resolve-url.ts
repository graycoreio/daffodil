import { gql } from 'apollo-angular';

export const DAFF_MAGENTO_RESOLVE_CATEGORY_URL_QUERY_NAME = 'MagentoResolveCategoryUrl';

/**
 * This query retrieves a URL resolution from Magento and informs you about
 * what type of route the URL is.
 */
export const MagentoResolveCategoryUrl = gql`
	query ${DAFF_MAGENTO_RESOLVE_CATEGORY_URL_QUERY_NAME}($url: String!) {
		urlResolver(url: $url) {
			entity_uid
		}
	}
`;

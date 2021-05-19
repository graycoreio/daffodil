import { gql } from 'apollo-angular';

export const DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME = 'MagentoResolveUrlv242';

/**
 * This query retrieves a URL resolution from Magento and informs you about
 * what type of route the URL is.
 */
export const MagentoResolveUrlv242 = gql`
	query ${DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME}($url: String!) {
		urlResolver(url: $url) {
			entity_uid
			relative_url
			redirectCode
			type
		}
	}
`;

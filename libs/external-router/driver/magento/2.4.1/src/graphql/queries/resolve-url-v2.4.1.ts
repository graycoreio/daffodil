import { gql } from '@damienwebdev/apollo-angular';

export const DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME = 'MagentoResolveUrlv241';

/**
 * This query retrieves a URL resolution from Magento and informs you about
 * what type of route the URL is.
 */
export const MagentoResolveUrlv241 = gql`
	query ${DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME}($url: String!) {
		urlResolver(url: $url) {
			id
			relative_url
			redirectCode
			type
		}
	}
`;

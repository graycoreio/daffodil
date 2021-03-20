import { gql } from 'apollo-angular';

/**
 * This query retrieves a URL resolution from Magento and informs you about
 * what type of route the URL is.
 */
export const MagentoResolveUrlv241 = gql`
	query MagentoResolveUrlv241($url: String!) {
		urlResolver(url: $url) {
			id
			relative_url
			redirectCode
			type
		}
	}
`;

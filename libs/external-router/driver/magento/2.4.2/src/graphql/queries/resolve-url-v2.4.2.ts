import { gql } from 'apollo-angular';

/**
 * This query retrieves a URL resolution from Magento and informs you about
 * what type of route the URL is.
 */
export const MagentoResolveUrlv242 = gql`
	query MagentoResolveUrlv242($url: String!) {
		urlResolver(url: $url) {
			entity_uid
			relative_url
			redirectCode
			type
		}
	}
`;

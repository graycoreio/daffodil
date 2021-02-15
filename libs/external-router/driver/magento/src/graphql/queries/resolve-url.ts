import { gql } from 'apollo-angular';

/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 */
export const MagentoResolveUrl = gql`
	query MagentoResolveUrl($url: String!) {
		urlResolver(url: $url) {
			entity_uid
			relative_url
			redirectCode
			type
		}
	}
`;

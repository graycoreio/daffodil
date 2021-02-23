import { gql } from 'apollo-angular';

/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
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

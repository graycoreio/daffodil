import { gql } from 'apollo-angular';

import { MagentoCategoryUrlResolverResponse } from './response.type';
import { MagentoResolveCategoryUrlVariables } from './variables.type';

export const DAFF_MAGENTO_RESOLVE_CATEGORY_URL_QUERY_NAME = 'MagentoResolveCategoryUrl';

/**
 * This query retrieves a URL resolution from Magento and informs you about
 * what type of route the URL is.
 */
export const MagentoResolveCategoryUrl = gql<MagentoCategoryUrlResolverResponse, MagentoResolveCategoryUrlVariables>`
	query ${DAFF_MAGENTO_RESOLVE_CATEGORY_URL_QUERY_NAME}($url: String!) {
		route(url: $url) {
      __typename
			... on CategoryInterface {
				uid
			}
		}
	}
`;

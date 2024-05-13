import { gql } from 'apollo-angular';

import { MagentoNavgiationGetRootCategoryIdResponse } from './response.type';

export const MAGENTO_NAVIGATION_GET_ROOT_CATEGORY_ID_QUERY_NAME = 'MagentoNavigationGetRootCategoryId';

/**
 * Generates a category tree query with the specified number of nested child category tree fragments.
 *
 * @param depth The maximum depth to which category children should be added to the fragment.
 */
export const magentoNavigationGetRootCategoryIdQuery = gql<MagentoNavgiationGetRootCategoryIdResponse, null>`
  query ${MAGENTO_NAVIGATION_GET_ROOT_CATEGORY_ID_QUERY_NAME} {
    storeConfig {
      root_category_uid
    }
  }
`;

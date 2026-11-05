import { gql } from 'apollo-angular';

import { MagentoContentGetPageResponse as Response } from './response.type';
import { MagentoContentGetPageQueryVariables as Variables } from './variables.type';
import { cmsPageFragment } from '../fragments/public_api';

export const MAGENTO_CONTENT_GET_PAGE_QUERY_NAME = 'MagentoContentGetPage';

export const getCmsPage = () => gql<Response, Variables>`
  query ${MAGENTO_CONTENT_GET_PAGE_QUERY_NAME}($url: String!) {
		route(url: $url) {
			relative_url
			redirect_code
			type
			... on CmsPage {
      	...cmsPage
			}
    }
  }
  ${cmsPageFragment}
`;

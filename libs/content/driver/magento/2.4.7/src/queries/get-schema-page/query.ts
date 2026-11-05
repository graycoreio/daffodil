import { gql } from 'apollo-angular';

import { MagentoContentGetSchemaPageResponse as Response } from './response.type';
import { MagentoContentGetSchemaPageQueryVariables as Variables } from './variables.type';
import { cmsSchemaPageFragment } from '../fragments/public_api';

export const MAGENTO_CONTENT_GET_SCHEMA_PAGE_QUERY_NAME = 'MagentoContentGetSchemaPage';

export const getCmsSchemaPage = () => gql<Response, Variables>`
  query ${MAGENTO_CONTENT_GET_SCHEMA_PAGE_QUERY_NAME}($url: String!) {
    route(url: $url) {
      relative_url
      redirect_code
      type
      ... on CmsPage {
        ...cmsSchemaPage
      }
    }
  }
  ${cmsSchemaPageFragment}
`;

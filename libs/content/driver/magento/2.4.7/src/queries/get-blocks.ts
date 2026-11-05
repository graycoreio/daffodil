import { gql } from 'apollo-angular';

import { cmsBlockFragment } from './fragments/public_api';

export const MAGENTO_CONTENT_GET_BLOCKS_QUERY_NAME = 'MagentoContentGetBlocks';

export const getCmsBlocks = gql`
  query ${MAGENTO_CONTENT_GET_BLOCKS_QUERY_NAME}($ids: [String!]!) {
    cmsBlocks(identifiers: $ids) {
      items {
        ...cmsBlock
      }
    }
  }
  ${cmsBlockFragment}
`;

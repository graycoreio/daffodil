import { ApolloQueryResult } from '@apollo/client/core';

import { DaffContentInvalidAPIResponseError } from '@daffodil/content/driver';

import { MagentoGetBlocksResponse } from '../models/public_api';

export const validateGetBlocksResponse = (response: ApolloQueryResult<MagentoGetBlocksResponse>) => {
  if (response.data?.cmsBlocks?.items) {
    if (response.data.cmsBlocks.items.reduce((acc, block) => acc && !!(
      block.identifier
        && block.content
        && block.title
    ), true)) {
      return response;
    } else {
      throw new DaffContentInvalidAPIResponseError('One of the blocks does not contain required fields.');
    }
  } else {
    throw new DaffContentInvalidAPIResponseError('Get blocks response does not contain a valid list of blocks.');
  }
};

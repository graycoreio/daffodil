import { ApolloQueryResult } from '@apollo/client/core';

import { DaffContentInvalidAPIResponseError } from '@daffodil/content/driver';
import { validateFieldPresence } from '@daffodil/core';
import { GraphQlApolloValidator } from '@daffodil/core/graphql';

import { MagentoContentGetPageResponse } from '../queries/public_api';

export const validateMagentoContentGetPageResponse: GraphQlApolloValidator<MagentoContentGetPageResponse> = (response: ApolloQueryResult<MagentoContentGetPageResponse>) => {
  if (response.data?.route?.type === 'CMS_PAGE') {
    if (validateFieldPresence<any>(response.data.route, 'content', 'title', 'identifier')) {
      return response;
    } else {
      throw new DaffContentInvalidAPIResponseError('The page response does not contain required fields.');
    }
  } else {
    throw new DaffContentInvalidAPIResponseError('Get page response does not contain a page.');
  }
};

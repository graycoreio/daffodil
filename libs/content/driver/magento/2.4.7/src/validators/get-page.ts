
import { DaffContentInvalidAPIResponseError } from '@daffodil/content/driver';
import { validateFieldPresence } from '@daffodil/core';
import { GraphQlApolloValidator } from '@daffodil/core/graphql';

import { MagentoContentGetPageResponse } from '../queries/public_api';

interface Shape {
  data: {
    route: {
      type: true;
      content: true;
      title: true;
      identifier: true;
    };
  };
}
type ValidatorFn = GraphQlApolloValidator<MagentoContentGetPageResponse, Shape>;

const isValid = (
  response: Parameters<ValidatorFn>[0],
): response is ReturnType<ValidatorFn> => validateFieldPresence<any>(response.data?.route, 'content', 'title', 'identifier');

export const validateMagentoContentGetPageResponse: ValidatorFn = (response) => {
  if (response.data?.route?.type === 'CMS_PAGE') {
    if (isValid(response)) {
      return response;
    }

    throw new DaffContentInvalidAPIResponseError('The page response does not contain required fields.');
  }

  throw new DaffContentInvalidAPIResponseError('Get page response does not contain a page.');
};

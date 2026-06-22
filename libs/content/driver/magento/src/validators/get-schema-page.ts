
import { DaffContentInvalidAPIResponseError } from '@daffodil/content/driver';
import { validateFieldPresence } from '@daffodil/core';
import { GraphQlApolloValidator } from '@daffodil/core/graphql';

import { MagentoContentGetSchemaPageResponse } from '../queries/public_api';

interface Shape {
  data: {
    route: {
      type: true;
      content_schema_json: true;
      title: true;
      identifier: true;
    };
  };
}
type ValidatorFn = GraphQlApolloValidator<MagentoContentGetSchemaPageResponse, Shape>;

const isValid = (
  response: Parameters<ValidatorFn>[0],
): response is ReturnType<ValidatorFn> => validateFieldPresence<any>(response.data?.route, 'content_schema_json', 'title', 'identifier');

export const validateMagentoContentGetSchemaPageResponse: ValidatorFn = (response) => {
  if (response.data?.route?.type === 'CMS_PAGE') {
    if (isValid(response)) {
      return response;
    }

    throw new DaffContentInvalidAPIResponseError('The page response does not contain required fields.');
  }

  throw new DaffContentInvalidAPIResponseError('Get page response does not contain a page.');
};

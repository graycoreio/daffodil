import { GraphQlApolloValidator } from '@daffodil/core/graphql';
import { DaffProductInvalidAPIResponseError } from '@daffodil/product/driver';

import { MagentoAttributesList } from '../../models/public_api';

interface Shape {
  data: { attributesList: { items: true } };
}
type ValidatorFn = GraphQlApolloValidator<{ attributesList: MagentoAttributesList }, Shape>;

const isValid = (
  response: Parameters<ValidatorFn>[0],
): response is ReturnType<ValidatorFn> => !!response.data?.attributesList?.items;

export const magentoAttributesListValidator: ValidatorFn = (response) => {
  if (isValid(response)) {
    return response;
  }

  throw new DaffProductInvalidAPIResponseError('The platform did not respond with custom attributes.');
};

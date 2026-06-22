import { GraphQlApolloValidator } from '@daffodil/core/graphql';
import { DaffProductInvalidAPIResponseError } from '@daffodil/product/driver';

import { MagentoProductGetByUrlReponse } from './response.type';

interface Shape {
  data: { route: { sku: true } };
}
type ValidatorFn = GraphQlApolloValidator<MagentoProductGetByUrlReponse, Shape>;

const isValid = (
  response: Parameters<ValidatorFn>[0],
): response is ReturnType<ValidatorFn> => !!response.data?.route?.sku;

export const magentoProductGetByUrlValidator: ValidatorFn = (response) => {
  if (isValid(response)) {
    return response;
  }

  throw new DaffProductInvalidAPIResponseError('The platform did not respond with a product.');
};

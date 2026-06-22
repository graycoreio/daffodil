import { GraphQlApolloValidator } from '@daffodil/core/graphql';
import { DaffProductInvalidAPIResponseError } from '@daffodil/product/driver';

import { MagentoGetProductResponse } from '../../models/public_api';

interface Shape {
  data: { products: { items: true } };
}
type ValidatorFn = GraphQlApolloValidator<MagentoGetProductResponse, Shape>;

const isValid = (
  response: Parameters<ValidatorFn>[0],
): response is ReturnType<ValidatorFn> => !!response.data?.products?.items;

export const magentoProductGetAllValidator: ValidatorFn = (response) => {
  if (isValid(response)) {
    return response;
  }

  throw new DaffProductInvalidAPIResponseError('The platform did not respond with  products.');
};

import { GraphQlApolloValidator } from '@daffodil/core/graphql';
import { DaffProductInvalidAPIResponseError } from '@daffodil/product/driver';

import { MagentoCustomAttributeSearchResponse } from './response.type';

interface Shape {
  data: { customAttributeMetadataV2: { items: true } };
}
type ValidatorFn = GraphQlApolloValidator<MagentoCustomAttributeSearchResponse, Shape>;

const isValid = (
  response: Parameters<ValidatorFn>[0],
): response is ReturnType<ValidatorFn> => !!response.data?.customAttributeMetadataV2?.items;

export const magentoAttributesSearchValidator: ValidatorFn = (response) => {
  if (isValid(response)) {
    return response;
  }

  throw new DaffProductInvalidAPIResponseError('The platform did not respond with custom attributes.');
};

import { GraphQlApolloValidator } from '@daffodil/core/graphql';

import { MagentoCategoryUrlResolverResponse } from './response.type';

interface Shape {
  data: { route: { uid: true } };
}
type ValidatorFn = GraphQlApolloValidator<MagentoCategoryUrlResolverResponse, Shape>;

const isValid = (
  response: Parameters<ValidatorFn>[0],
): response is ReturnType<ValidatorFn> => !!response.data?.route?.uid;

export const magentoCategoryGetByUrlValidator: ValidatorFn = (response) => {
  if (isValid(response)) {
    return response;
  }

  throw new Error('The platform did not respond with a category.');
};

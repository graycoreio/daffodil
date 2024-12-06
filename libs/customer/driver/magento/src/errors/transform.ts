import { ApolloError } from '@apollo/client/core';
import { GraphQLFormattedError } from 'graphql';

import { DaffError } from '@daffodil/core';
import {
  DaffCustomerDriverErrorMap,
  DaffCustomerInvalidAPIResponseError,
} from '@daffodil/customer/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffCustomerMagentoErrorMessageRegexMap } from './map';

/**
 * Transforms a single GraphQL error.
 * Optionally accepts a request payload which can be used in certain cases
 * to add supplemental info to the error.
 */
export function transformMagentoCartGraphQlError(error: GraphQLFormattedError, requestPayload?: unknown): DaffError {
  // TODO: readdress this when we move to eslint
  // eslint-disable-next-line
  for (const code in DaffCustomerMagentoErrorMessageRegexMap) {
    const matchIndex = error.message.search(DaffCustomerMagentoErrorMessageRegexMap[code]);

    if (matchIndex > -1 && DaffCustomerDriverErrorMap[code]) {
      const errObj = new DaffCustomerDriverErrorMap[code](error.message);

      return errObj;
    }
  }

  return daffTransformMagentoError(error, {});
};

export function transformMagentoReviewsError(error: any, requestPayload?: unknown) {
  if (error.graphQLErrors?.length) {
    return transformMagentoCartGraphQlError((<ApolloError>error).graphQLErrors[0], requestPayload);
  } else {
    return daffTransformMagentoError(error, {}) || new DaffCustomerInvalidAPIResponseError(error.message);
  }
}

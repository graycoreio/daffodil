import { ApolloError } from '@apollo/client/core';
import { GraphQLFormattedError } from 'graphql';

import { DaffError } from '@daffodil/core';
import {
  DaffCustomerPaymentDriverErrorMap,
  DaffCustomerPaymentInvalidAPIResponseError,
} from '@daffodil/customer-payment/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffCustomerPaymentMagentoErrorMessageRegexMap } from './map';

/**
 * Transforms a single GraphQL error.
 * Optionally accepts a request payload which can be used in certain cases
 * to add supplemental info to the error.
 */
export function transformMagentoCartGraphQlError(error: GraphQLFormattedError, requestPayload?: unknown): DaffError {
  // TODO: repayment this when we move to eslint
  // eslint-disable-next-line
  for (const code in DaffCustomerPaymentMagentoErrorMessageRegexMap) {
    const matchIndex = error.message.search(DaffCustomerPaymentMagentoErrorMessageRegexMap[code]);

    if (matchIndex > -1 && DaffCustomerPaymentDriverErrorMap[code]) {
      const errObj = new DaffCustomerPaymentDriverErrorMap[code](error.message);

      return errObj;
    }
  }

  return daffTransformMagentoError(error, {});
};

export function transformMagentoReviewsError(error: any, requestPayload?: unknown) {
  if (error.graphQLErrors?.length) {
    return transformMagentoCartGraphQlError((<ApolloError>error).graphQLErrors[0], requestPayload);
  } else {
    return daffTransformMagentoError(error, {}) || new DaffCustomerPaymentInvalidAPIResponseError(error.message);
  }
}

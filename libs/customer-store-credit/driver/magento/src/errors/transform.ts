import { CombinedGraphQLErrors } from '@apollo/client';
import { GraphQLFormattedError } from 'graphql';

import { DaffError } from '@daffodil/core';
import {
  DaffCustomerStoreCreditDriverErrorMap,
  DaffCustomerStoreCreditInvalidAPIResponseError,
} from '@daffodil/customer-store-credit/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffCustomerStoreCreditMagentoErrorMessageRegexMap } from './map';

/**
 * Transforms a single GraphQL error.
 * Optionally accepts a request payload which can be used in certain cases
 * to add supplemental info to the error.
 */
export function transformMagentoCartGraphQlError(error: GraphQLFormattedError, requestPayload?: unknown): DaffError {
  // eslint-disable-next-line
  for (const code in DaffCustomerStoreCreditMagentoErrorMessageRegexMap) {
    const matchIndex = error.message.search(DaffCustomerStoreCreditMagentoErrorMessageRegexMap[code]);

    if (matchIndex > -1 && DaffCustomerStoreCreditDriverErrorMap[code]) {
      const errObj = new DaffCustomerStoreCreditDriverErrorMap[code](error.message);

      return errObj;
    }
  }

  return daffTransformMagentoError(error, {});
}

export function transformMagentoReviewsError(error: any, requestPayload?: unknown) {
  if (CombinedGraphQLErrors.is(error)) {
    return transformMagentoCartGraphQlError(error.errors[0], requestPayload);
  } else {
    return daffTransformMagentoError(error, {}) || new DaffCustomerStoreCreditInvalidAPIResponseError(error.message);
  }
}

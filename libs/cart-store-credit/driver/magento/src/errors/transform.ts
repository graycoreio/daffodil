import { ApolloError } from '@apollo/client/core';
import { GraphQLFormattedError } from 'graphql';

import {
  DaffCartStoreCreditDriverErrorMap,
  DaffCartStoreCreditInvalidAPIResponseError,
} from '@daffodil/cart-store-credit/driver';
import { DaffError } from '@daffodil/core';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffCartStoreCreditMagentoErrorMessageRegexMap } from './map';

/**
 * Transforms a single GraphQL error.
 * Optionally accepts a request payload which can be used in certain cases
 * to add supplemental info to the error.
 */
export function transformMagentoCartGraphQlError(error: GraphQLFormattedError, requestPayload?: unknown): DaffError {
  // eslint-disable-next-line
  for (const code in DaffCartStoreCreditMagentoErrorMessageRegexMap) {
    const matchIndex = error.message.search(DaffCartStoreCreditMagentoErrorMessageRegexMap[code]);

    if (matchIndex > -1 && DaffCartStoreCreditDriverErrorMap[code]) {
      const errObj = new DaffCartStoreCreditDriverErrorMap[code](error.message);

      return errObj;
    }
  }

  return daffTransformMagentoError(error, {});
};

export function transformMagentoReviewsError(error: any, requestPayload?: unknown) {
  if (error.graphQLErrors?.length) {
    return transformMagentoCartGraphQlError((<ApolloError>error).graphQLErrors[0], requestPayload);
  } else {
    return daffTransformMagentoError(error, {}) || new DaffCartStoreCreditInvalidAPIResponseError(error.message);
  }
}

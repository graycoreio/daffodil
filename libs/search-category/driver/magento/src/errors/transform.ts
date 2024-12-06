import { ApolloError } from '@apollo/client/core';
import { GraphQLFormattedError } from 'graphql';

import { DaffError } from '@daffodil/core';
import {
  daffTransformMagentoError,
  daffMagentoTransformGraphQlError,
} from '@daffodil/driver/magento';

import {
  MagentoSearchCategoryErrorMap,
  MagentoSearchCategoryErrorMessageRegexMap,
} from './map';

/**
 * Transforms a single GraphQL error.
 * Optionally accepts a request payload which can be used in certain cases
 * to add supplemental info to the error.
 */
export function transformMagentoSearchCategoryGraphQlError(error: GraphQLFormattedError, requestPayload?: unknown): DaffError {
  // TODO: readdress this when we move to eslint
  // eslint-disable-next-line
  for (const code in MagentoSearchCategoryErrorMessageRegexMap) {
    const matchIndex = error.message.search(MagentoSearchCategoryErrorMessageRegexMap[code]);

    if (matchIndex > -1 && MagentoSearchCategoryErrorMap[code]) {
      const errObj = new MagentoSearchCategoryErrorMap[code](error.message);

      return errObj;
    }
  }

  return daffMagentoTransformGraphQlError(error, MagentoSearchCategoryErrorMap);
};

/**
 * Transforms only the first GraphQL error with the cart magento error transformer,
 * otherwise falls back to a standard Magento error transform.
 */
export function transformSearchCategoryMagentoError(error, requestPayload?: unknown) {
  if (error.graphQLErrors?.length) {
    return transformMagentoSearchCategoryGraphQlError((<ApolloError>error).graphQLErrors[0], requestPayload);
  } else {
    return daffTransformMagentoError(error, MagentoSearchCategoryErrorMap);
  }
}

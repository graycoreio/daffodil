import { ApolloError } from '@apollo/client/core';
import { GraphQLFormattedError } from 'graphql';

import { DaffError } from '@daffodil/core';
import {
  daffTransformMagentoError,
  daffMagentoTransformGraphQlError,
} from '@daffodil/driver/magento';

import {
  MagentoSearchProductErrorMap,
  MagentoSearchProductErrorMessageRegexMap,
} from './map';

/**
 * Transforms a single GraphQL error.
 * Optionally accepts a request payload which can be used in certain cases
 * to add supplemental info to the error.
 */
export function transformMagentoSearchProductGraphQlError(error: GraphQLFormattedError, requestPayload?: unknown): DaffError {
  // TODO: readdress this when we move to eslint
  // eslint-disable-next-line
  for (const code in MagentoSearchProductErrorMessageRegexMap) {
    const matchIndex = error.message.search(MagentoSearchProductErrorMessageRegexMap[code]);

    if (matchIndex > -1 && MagentoSearchProductErrorMap[code]) {
      const errObj = new MagentoSearchProductErrorMap[code](error.message);

      return errObj;
    }
  }

  return daffMagentoTransformGraphQlError(error, MagentoSearchProductErrorMap);
};

/**
 * Transforms only the first GraphQL error with the cart magento error transformer,
 * otherwise falls back to a standard Magento error transform.
 */
export function transformSearchProductMagentoError(error, requestPayload?: unknown) {
  if (error.graphQLErrors?.length) {
    return transformMagentoSearchProductGraphQlError((<ApolloError>error).graphQLErrors[0], requestPayload);
  } else {
    return daffTransformMagentoError(error, MagentoSearchProductErrorMap);
  }
}

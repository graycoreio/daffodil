import { ApolloError } from '@apollo/client/core';
import { GraphQLFormattedError } from 'graphql';

import { DaffCartCoupon } from '@daffodil/cart';
import {
  DaffCartDriverErrorMap,
  DaffCartInvalidAPIResponseError,
  DaffInvalidCouponCodeError,
} from '@daffodil/cart/driver';
import { DaffError } from '@daffodil/core';
import {
  daffTransformMagentoError,
  daffMagentoTransformGraphQlError,
} from '@daffodil/driver/magento';

import {
  DaffCartMagentoErrorMap,
  DaffCartMagentoErrorMessageRegexMap,
  DaffCartMagentoUserErrorMap,
} from './map';
import { MagentoCartUserInputError } from '../models/public_api';

/**
 * Transforms a single GraphQL error.
 * Optionally accepts a request payload which can be used in certain cases
 * to add supplemental info to the error.
 */
export function transformMagentoCartGraphQlError(error: GraphQLFormattedError, requestPayload?: unknown): DaffError {
  // TODO: readdress this when we move to eslint
  // eslint-disable-next-line
  for (const code in DaffCartMagentoErrorMessageRegexMap) {
    const matchIndex = error.message.search(DaffCartMagentoErrorMessageRegexMap[code]);

    if (matchIndex > -1 && DaffCartDriverErrorMap[code]) {
      const errObj = new DaffCartDriverErrorMap[code](error.message);

      if (errObj instanceof DaffInvalidCouponCodeError) {
        (<DaffInvalidCouponCodeError>errObj).coupon = (<DaffCartCoupon>requestPayload)?.code;
      }

      return errObj;
    }
  }

  return daffMagentoTransformGraphQlError(error, DaffCartMagentoErrorMap);
};

/**
 * Transforms only the first GraphQL error with the cart magento error transformer,
 * otherwise falls back to a standard Magento error transform.
 */
export function transformCartMagentoError(error, requestPayload?: unknown) {
  if (error.graphQLErrors?.length) {
    return transformMagentoCartGraphQlError((<ApolloError>error).graphQLErrors[0], requestPayload);
  } else {
    return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
  }
}

export function magentoCartTransformUserError(error: MagentoCartUserInputError): DaffError {
  return new (DaffCartMagentoUserErrorMap[error.code] || DaffCartInvalidAPIResponseError)(error.message);
}

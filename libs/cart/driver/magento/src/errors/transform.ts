import { ApolloError } from '@apollo/client/core';

import { DaffCartCoupon } from '@daffodil/cart';
import {
  DaffCartDriverErrorMap,
  DaffInvalidCouponCodeError,
} from '@daffodil/cart/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

import {
  DaffCartMagentoErrorMap,
  DaffCartMagentoErrorMessageRegexMap,
} from './map';


function transformMagentoCartGraphQlError(error: ApolloError, requestPayload?): Error {
  // TODO: readdress this when we move to eslint
  // eslint-disable-next-line
  for (const code in DaffCartMagentoErrorMessageRegexMap) {
    const matchIndex = error.graphQLErrors[0].message.search(DaffCartMagentoErrorMessageRegexMap[code]);

    if (matchIndex > -1 && DaffCartDriverErrorMap[code]) {
      const errObj = new DaffCartDriverErrorMap[code](error.message);

      if (errObj instanceof DaffInvalidCouponCodeError) {
        (<DaffInvalidCouponCodeError>errObj).coupon = (<DaffCartCoupon>requestPayload)?.code;
      }

      return errObj;
    }
  }

  return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
};

export function transformCartMagentoError(error, requestPayload?) {
  if (error.graphQLErrors?.length) {
    return transformMagentoCartGraphQlError(error, requestPayload);
  } else {
    return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
  }
}

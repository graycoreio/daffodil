import { ApolloError } from '@apollo/client/core';

import { DaffCartDriverErrorMap } from '@daffodil/cart/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

import {
  DaffCartMagentoErrorMap,
  DaffCartMagentoErrorMessageRegexMap,
} from './map';


function transformMagentoCartGraphQlError(error: ApolloError): Error {
  // TODO: readdress this when we move to eslint
  // eslint-disable-next-line
  for (const code in DaffCartMagentoErrorMessageRegexMap) {
    const matchIndex = error.graphQLErrors[0].message.search(DaffCartMagentoErrorMessageRegexMap[code]);

    if (matchIndex > -1 && DaffCartDriverErrorMap[code]) {
      return new DaffCartDriverErrorMap[code](error.message);
    }
  }

  return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
};

export function transformCartMagentoError(error) {
  if (error.graphQLErrors?.length) {
    return transformMagentoCartGraphQlError(error);
  } else {
    return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
  }
}

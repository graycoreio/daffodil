import { ApolloError } from 'apollo-client';

import { daffTransformMagentoError } from '@daffodil/driver/magento';
import { DaffCartDriverErrorMap } from '@daffodil/cart/driver';

import { DaffCartMagentoErrorMap, DaffCartMagentoErrorMessageRegexMap } from './map';


function transformMagentoCartGraphQlError(error: ApolloError): Error {
	if (error.graphQLErrors.length) {
    for (const code in DaffCartMagentoErrorMessageRegexMap) {
      if (DaffCartMagentoErrorMessageRegexMap.hasOwnProperty(code)) {
        const matchIndex = error.graphQLErrors[0].message.search(DaffCartMagentoErrorMessageRegexMap[code]);

        if (matchIndex > -1 && DaffCartDriverErrorMap[code]) {
          return new DaffCartDriverErrorMap[code](error.message)
        }
      }
    }
  }

  return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
};

export function transformCartMagentoError(error) {
  if (error.graphQLErrors) {
		return transformMagentoCartGraphQlError(error);
	} else {
		return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
	}
}

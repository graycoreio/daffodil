import { ApolloError } from 'apollo-client';

import { daffTransformMagentoError } from '@daffodil/driver/magento';
import { DaffCartDriverErrorMap } from '@daffodil/cart/driver';

import { DaffCartMagentoErrorMap, DaffCartMagentoErrorMessageRegexMap } from './map';


function transformMagentoCartGraphQlError(error: ApolloError): Error {
  // TODO: readdress this when we move to eslint
  // tslint:disable-next-line
  for (const code in DaffCartMagentoErrorMessageRegexMap) {
    const matchIndex = error.graphQLErrors[0].message.search(DaffCartMagentoErrorMessageRegexMap[code]);

    if (matchIndex > -1 && DaffCartDriverErrorMap[code]) {
      return new DaffCartDriverErrorMap[code](error.message)
    }
  }

  return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
};

export function transformCartMagentoError(error) {
  // TODO: optional chaining
  if (error.graphQLErrors && error.graphQLErrors.length) {
		return transformMagentoCartGraphQlError(error);
	} else {
		return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
	}
}

import {
  inject,
  InjectionToken,
  Provider,
} from '@angular/core';
import {
  from,
  InMemoryCache,
  PossibleTypesMap,
  TypePolicies,
  UriFunction,
} from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';

import { provideDaffDriverHttpClientCacheService } from '@daffodil/driver';

import { createHttpLink } from './apollo/create-http-link';
import typePolicies from './apollo/type-policies';
import { DaffDriverHttpClientCacheMagentoService } from './graphql/cache.service';
import { MAGENTO_POSSIBLE_TYPES } from './schema/schema';

export interface DaffMagentoDriverConfig {
  possibleTypes: PossibleTypesMap;
  typePolicies: TypePolicies;
}

/**
 * Sets up the Magento Daffodil driver configuration for Magento's GraphQl API.
 *
 * Under the hood, this creates an Apollo Client configuration.
 *
 * @param endpoint - The Magento store domain (e.g. "https://www.my-store.com/graphql") or an injection token for a string or function that returns a string
 */
export function provideMagentoDriver(endpoint: string | InjectionToken<string | UriFunction>, options: DaffMagentoDriverConfig = {
  possibleTypes: MAGENTO_POSSIBLE_TYPES.possibleTypes,
  typePolicies,
}): Provider[] {
  return [
    provideApollo(() => ({
      link: from([
        createHttpLink(typeof endpoint === 'string' ? endpoint : inject(endpoint)),
      ]),
      cache: new InMemoryCache({ typePolicies: options.typePolicies, possibleTypes: options.possibleTypes }),
    })),
    provideDaffDriverHttpClientCacheService(DaffDriverHttpClientCacheMagentoService),
  ];
}

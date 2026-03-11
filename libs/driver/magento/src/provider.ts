import {
  EnvironmentProviders,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';
import {
  from,
  InMemoryCache,
  PossibleTypesMap,
  TypePolicies,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { provideApollo } from 'apollo-angular';
import {
  HttpLink,
  Options as HttpOptions,
} from 'apollo-angular/http';

import { DAFF_APOLLO_REQUEST_HANDLERS } from '@daffodil/core/graphql';
import { provideDaffDriverHttpClientCacheService } from '@daffodil/driver';

import typePolicies from './apollo/type-policies';
import {
  DAFF_DRIVER_MAGENTO_ERROR_HANDLER,
  DAFF_DRIVER_MAGENTO_EXTRA_APOLLO_OPTIONS,
  MagentoDriverFeatureKind,
  MagentoDriverFeature,
  provideDaffDriverMagentoTransferState,
} from './features/public_api';
import { DaffDriverHttpClientCacheMagentoService } from './graphql/cache.service';
import { MAGENTO_POSSIBLE_TYPES } from './schema/schema';

export interface DaffMagentoDriverConfig extends HttpOptions {
  possibleTypes?: PossibleTypesMap;
  typePolicies?: TypePolicies;
}

/**
 * Sets up the Magento Daffodil driver configuration for Magento's GraphQl API.
 *
 * Under the hood, this creates an Apollo Client configuration.
 *
 * @param endpoint - The Magento store domain (e.g. "https://www.my-store.com/graphql") or an injection token for a string or function that returns a string
 */
export function provideMagentoDriver(options: DaffMagentoDriverConfig | InjectionToken<DaffMagentoDriverConfig>, ...features: Array<MagentoDriverFeature>): EnvironmentProviders {
  const opts: DaffMagentoDriverConfig = {
    possibleTypes: MAGENTO_POSSIBLE_TYPES.possibleTypes,
    typePolicies,
    ...(options instanceof InjectionToken ? inject(options) : options),
  };
  const cache = new InMemoryCache({ typePolicies: opts.typePolicies, possibleTypes: opts.possibleTypes });
  const providers = [
    ...features.flatMap(({ ɵproviders }) => ɵproviders),
    provideApollo(() => ({
      ...inject(DAFF_DRIVER_MAGENTO_EXTRA_APOLLO_OPTIONS),
      link: from([
        ...inject(DAFF_APOLLO_REQUEST_HANDLERS),
        onError(inject(DAFF_DRIVER_MAGENTO_ERROR_HANDLER)),
        inject(HttpLink).create(opts),
      ]),
      cache,
    })),
    provideDaffDriverHttpClientCacheService(DaffDriverHttpClientCacheMagentoService),
  ];

  if (features.find(({ ɵkind }) => ɵkind === MagentoDriverFeatureKind.TransferState)) {
    providers.push(provideDaffDriverMagentoTransferState(cache));
  }

  return makeEnvironmentProviders(providers);
}

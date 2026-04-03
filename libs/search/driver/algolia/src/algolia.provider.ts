import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffSearchDriver } from '@daffodil/search/driver';

import { provideDaffSearchAlgoliaConfig } from './config/public_api';
import { DaffSearchAlgoliaDriver } from './search.service';
import { AlgoliaSearchCollectionTransformer } from './transformers/collection.service';

export const provideDaffAlgoliaSearchDriver = (config: Parameters<typeof provideDaffSearchAlgoliaConfig>[0]) =>
  makeEnvironmentProviders([
    AlgoliaSearchCollectionTransformer,
    provideDaffSearchDriver(DaffSearchAlgoliaDriver),
    provideDaffSearchAlgoliaConfig(config),
  ]);

import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  PLATFORM_ID,
} from '@angular/core';

import { DaffNoopStorageService } from './noopstorage/noopstorage.service';
import {
  DaffPersistenceService,
  DaffPersistenceServiceToken,
} from './persistence.interface';
import { createSingleInjectionToken } from '../injection-tokens/public_api';

export const {
  /**
   * Provides noop for the persistence service on the server.
   */
  token: DaffServerSafePersistenceServiceToken,
  /**
   * Provider function for {@link DaffServerSafePersistenceServiceToken}.
   */
  provider: provideDaffServerSafePersistenceServiceToken,
} = createSingleInjectionToken<DaffPersistenceService>(
  'DaffServerSafePersistenceService',
  {
    providedIn: 'root',
    factory: () =>
      isPlatformBrowser(inject<string>(PLATFORM_ID))
        ? inject<DaffPersistenceService>(DaffPersistenceServiceToken)
        : inject<DaffPersistenceService>(DaffNoopStorageService),
  },
);

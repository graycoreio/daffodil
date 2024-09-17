import { isPlatformBrowser } from '@angular/common';
import {
  InjectionToken,
  inject,
  PLATFORM_ID,
} from '@angular/core';

import { DaffNoopStorageService } from './noopstorage/noopstorage.service';
import {
  DaffPersistenceService,
  DaffPersistenceServiceToken,
} from './persistence.interface';

/**
 * Provides noop for the persistence service on the server.
 */
export const DaffServerSafePersistenceServiceToken = new InjectionToken<
  DaffPersistenceService
>('DaffServerSafePersistenceService', {
  providedIn: 'root',
  factory: () =>
    isPlatformBrowser(inject<string>(PLATFORM_ID))
      ? inject<DaffPersistenceService>(DaffPersistenceServiceToken)
      : inject<DaffPersistenceService>(DaffNoopStorageService),
});

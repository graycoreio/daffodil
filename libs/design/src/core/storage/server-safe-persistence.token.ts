import { isPlatformBrowser } from '@angular/common';
import {
  InjectionToken,
  inject,
  PLATFORM_ID,
} from '@angular/core';

import {
  DaffPersistenceService,
  DaffPersistenceServiceToken,
  DaffNoopStorageService,
} from '@daffodil/core';

export const DaffServerSafePersistenceServiceToken = new InjectionToken<
	DaffPersistenceService
>('DaffServerSafePersistenceService', {
  providedIn: 'root',
  factory: () =>
    isPlatformBrowser(inject<string>(PLATFORM_ID))
      ? inject<DaffPersistenceService>(DaffPersistenceServiceToken)
      : inject<DaffPersistenceService>(DaffNoopStorageService),
});

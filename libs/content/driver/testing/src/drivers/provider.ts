import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffContentDriver,
  provideDaffContentHtmlPageDriver,
} from '@daffodil/content/driver';

import { DaffContentPageTestingService } from './page.service';
import { DaffTestingContentService } from './service';

/**
 * Provides the testing implementations of the `@daffodil/content/driver` interfaces.
 */
export const provideDaffContentTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffContentDriver(DaffTestingContentService),
  provideDaffContentHtmlPageDriver(DaffContentPageTestingService),
]);

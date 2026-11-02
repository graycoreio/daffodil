import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffNewsletterFacade } from '@daffodil/newsletter/state';

import { MockDaffNewsletterFacade } from './mock-newsletter-facade';

/**
 * Provides the {@link MockDaffNewsletterFacade} for {@link DaffNewsletterFacade}.
 */
export const provideDaffNewsletterStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffNewsletterFacade, useExisting: MockDaffNewsletterFacade },
]);

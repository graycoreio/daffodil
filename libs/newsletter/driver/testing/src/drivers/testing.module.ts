import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNewsletterTestingDriver } from '../provider';

/**
 * @deprecated in favor of {@link provideDaffNewsletterTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule()
export class DaffNewsletterTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffNewsletterTestingDriverModule> {
    return {
      ngModule: DaffNewsletterTestingDriverModule,
      providers: [
        provideDaffNewsletterTestingDriver(),
      ],
    };
  }
}

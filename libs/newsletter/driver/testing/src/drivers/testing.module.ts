import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNewsletterTestingDriver } from '../provider';

/**
 * @deprecated in favor of {@link provideDaffNewsletterTestingDriver}
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

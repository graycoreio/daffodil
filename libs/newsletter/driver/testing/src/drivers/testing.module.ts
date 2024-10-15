import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNewsletterDriver } from '@daffodil/newsletter/driver';

import { DaffTestingNewsletterService } from './newsletter.service';

@NgModule()
export class DaffNewsletterTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffNewsletterTestingDriverModule> {
    return {
      ngModule: DaffNewsletterTestingDriverModule,
      providers: [
        provideDaffNewsletterDriver(DaffTestingNewsletterService),
      ],
    };
  }
}

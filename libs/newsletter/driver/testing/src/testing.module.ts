import { NgModule, ModuleWithProviders } from '@angular/core';
import { DaffTestingNewsletterService } from './newsletter.service';
import { DaffNewsletterDriver } from '@daffodil/newsletter/driver';

@NgModule()
export class DaffNewsletterTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffNewsletterTestingDriverModule> {
    return {
      ngModule: DaffNewsletterTestingDriverModule,
      providers: [
        {
          provide: DaffNewsletterDriver,
          useClass: DaffTestingNewsletterService
        }
      ]
    };
  }
}

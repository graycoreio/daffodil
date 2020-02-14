import { NgModule, ModuleWithProviders } from '@angular/core';
import { DaffTestingNewsletterService } from '@daffodil/newsletter/testing'
import { DaffNewsletterDriver } from '@daffodil/newsletter';

@NgModule()
export class DaffNewsletterTestingDriverModule {
  static forRoot(): ModuleWithProviders {
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

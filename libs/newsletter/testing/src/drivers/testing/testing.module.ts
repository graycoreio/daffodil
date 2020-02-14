import { NgModule, ModuleWithProviders } from '@angular/core';
import { DaffNewsletterDriver } from '@daffodil/newsletter';
import { DaffTestingNewsletterService } from './newsletter.service';

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

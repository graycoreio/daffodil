import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DaffInMemoryNewsletterService } from './newsletter.service';
import { DaffNewsletterDriver } from '@daffodil/newsletter/driver';
/**
 * Module for providing the DaffInMemoryNewsletterService driver to your application
 */
@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffNewsletterInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffNewsletterInMemoryDriverModule> {
    return {
      ngModule: DaffNewsletterInMemoryDriverModule,
      providers: [
        {
          provide: DaffNewsletterDriver,
          useExisting: DaffInMemoryNewsletterService
        }
      ]
    }
  }
}
import { CommonModule } from "@angular/common";
import { DaffNewsletterDriver } from "libs/newsletter/src/driver/injection-tokens/newsletter-driver.token";
import { DaffInMemoryNewsletterService } from "./newsletter.service";
import { NgModule, ModuleWithProviders } from '@angular/core';
/**
 * Module for providing the DaffInMemoryNewsletterService driver to your application
 */
@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffNewsletterInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
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
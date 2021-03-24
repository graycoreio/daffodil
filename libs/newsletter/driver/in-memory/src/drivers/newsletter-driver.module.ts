import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffNewsletterDriver } from '@daffodil/newsletter/driver';

import { DaffInMemoryNewsletterService } from './newsletter.service';
/**
 * Module for providing the DaffInMemoryNewsletterService driver to your application
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffNewsletterInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffNewsletterInMemoryDriverModule> {
    return {
      ngModule: DaffNewsletterInMemoryDriverModule,
      providers: [
        {
          provide: DaffNewsletterDriver,
          useExisting: DaffInMemoryNewsletterService,
        },
      ],
    };
  }
}

import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNewsletterInMemoryDriver } from '../provider';
/**
 * Module for providing the DaffInMemoryNewsletterService driver to your application
 *
 * @deprecated in favor of {@link provideDaffNewsletterInMemoryDriver}
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
        provideDaffNewsletterInMemoryDriver(),
      ],
    };
  }
}

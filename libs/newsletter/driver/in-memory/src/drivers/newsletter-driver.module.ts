import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNewsletterInMemoryDriver } from '../provider';
/**
 * Module for providing the DaffInMemoryNewsletterService driver to your application
 *
 * @deprecated in favor of {@link provideDaffNewsletterInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
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

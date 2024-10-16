import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffNewsletterDriver } from '@daffodil/newsletter/driver';

import { DaffInMemoryNewsletterService } from './newsletter.service';
import { DaffInMemoryBackendNewsletterService } from '../backend/public_api';
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
        provideDaffNewsletterDriver(DaffInMemoryNewsletterService),
        provideDaffInMemoryBackends(DaffInMemoryBackendNewsletterService),
      ],
    };
  }
}

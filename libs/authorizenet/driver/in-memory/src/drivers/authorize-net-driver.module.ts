import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthorizeNetInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthorizeNetInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthorizeNetInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthorizeNetInMemoryDriverModule> {
    return {
      ngModule: DaffAuthorizeNetInMemoryDriverModule,
      providers: [
        provideDaffAuthorizeNetInMemoryDriver(),
      ],
    };
  }
}

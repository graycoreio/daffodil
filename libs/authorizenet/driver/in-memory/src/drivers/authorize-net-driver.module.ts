import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthorizeNetInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthorizeNetInMemoryDriver}
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

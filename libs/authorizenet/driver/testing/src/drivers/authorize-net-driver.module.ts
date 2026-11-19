import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthorizeNetTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthorizeNetTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffTestingAuthorizeNetDriverModule {
  static forRoot(): ModuleWithProviders<DaffTestingAuthorizeNetDriverModule> {
    return {
      ngModule: DaffTestingAuthorizeNetDriverModule,
      providers: [
        provideDaffAuthorizeNetTestingDriver(),
      ],
    };
  }
}

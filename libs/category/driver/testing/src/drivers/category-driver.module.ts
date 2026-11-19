import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCategoryTestingDriver } from './provider';

/**
 * A module for providing the {@link DaffTestingCategoryService} for the {@link DaffCategoryDriver} token.
 *
 * @deprecated in favor of {@link provideDaffCategoryTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCategoryTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCategoryTestingDriverModule> {
    return {
      ngModule: DaffCategoryTestingDriverModule,
      providers: [
        provideDaffCategoryTestingDriver(),
      ],
    };
  }
}

import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCategoryTestingDriver } from './provider';

/**
 * A module for providing the {@link DaffTestingCategoryService} for the {@link DaffCategoryDriver} token.
 *
 * @deprecated in favor of {@link provideDaffCategoryTestingDriver}
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

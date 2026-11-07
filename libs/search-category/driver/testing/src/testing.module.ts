import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchCategoryTestingDriver } from './provider';

/**
 * Module for providing the category search result factory as a search result kind factory.
 *
 * @deprecated in favor of {@link provideDaffSearchCategoryTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchCategoryTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchCategoryTestingDriverModule> {
    return {
      ngModule: DaffSearchCategoryTestingDriverModule,
      providers: [
        provideDaffSearchCategoryTestingDriver(),
      ],
    };
  }
}

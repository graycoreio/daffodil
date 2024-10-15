import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCategoryDriver } from '@daffodil/category/driver';

import { DaffTestingCategoryService } from './category.service';

/**
 * A module for providing the {@link DaffTestingCategoryService} for the {@link DaffCategoryDriver} token.
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
        provideDaffCategoryDriver(DaffTestingCategoryService),
      ],
    };
  }
}

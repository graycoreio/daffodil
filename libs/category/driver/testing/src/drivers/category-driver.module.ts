import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCategoryDriver } from '@daffodil/category/driver';

import { DaffTestingCategoryService } from './category.service';

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
        {
          provide: DaffCategoryDriver,
          useExisting: DaffTestingCategoryService,
        },
      ],
    };
  }
}

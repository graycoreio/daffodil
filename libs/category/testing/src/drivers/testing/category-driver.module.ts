import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCategoryDriver } from '@daffodil/category';

import { DaffTestingCategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCategoryTestingDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffCategoryTestingDriverModule,
      providers: [
        {
          provide: DaffCategoryDriver,
          useExisting: DaffTestingCategoryService
        }
      ]
    };
  }
}

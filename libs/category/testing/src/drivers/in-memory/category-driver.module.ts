import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCategoryDriver } from '@daffodil/category';

import { DaffInMemoryCategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCategoryInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffCategoryInMemoryDriverModule,
      providers: [
        {
          provide: DaffCategoryDriver,
          useExisting: DaffInMemoryCategoryService
        }
      ]
    };
  }
}

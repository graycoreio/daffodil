import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCategoryDriver } from '../injection-tokens/category-driver.token';
import { DaffMagentoCategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCategoryMagentoDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffCategoryMagentoDriverModule,
      providers: [
        {
          provide: DaffCategoryDriver,
          useExisting: DaffMagentoCategoryService
        }
      ]
    };
  }
}

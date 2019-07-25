import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '../injection-tokens/product-driver.token';
import { DaffMagentoProductService } from './product.service';

import { DaffProductTransformer } from '../injection-tokens/product-transformer.token';
import { ProductTransformerService } from './transforms/product-transformer.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffProductMagentoDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffMagentoProductService
        },
        {
          provide: DaffProductTransformer,
          useExisting: ProductTransformerService
        }
      ]
    };
  }
}

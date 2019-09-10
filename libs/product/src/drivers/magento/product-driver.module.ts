import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '../injection-tokens/product-driver.token';
import { DaffMagentoProductService } from './product.service';

import { DaffProductTransformer } from '../injection-tokens/product-transformer.token';
import { DaffMagentoProductTransformerService } from './transforms/product-transformer.service';
import { DaffProductQueryManager } from '../injection-tokens/product-query-manager.token';
import { DaffMagentoProductGraphQlQueryManagerService } from './queries/product-query-manager.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductMagentoDriverModule> {
    return {
      ngModule: DaffProductMagentoDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffMagentoProductService
        },
        {
          provide: DaffProductTransformer,
          useExisting: DaffMagentoProductTransformerService
        },
        {
          provide: DaffProductQueryManager,
          useExisting: DaffMagentoProductGraphQlQueryManagerService
        }
      ]
    };
  }
}

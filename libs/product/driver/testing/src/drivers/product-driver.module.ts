import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffProductDriver,
  provideDaffProductCustomAttributeDriver,
} from '@daffodil/product/driver';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffTestingProductCustomAttributeService } from './custom-attribute.service';
import { DaffTestingProductService } from './product.service';

/**
 * Module for providing the {@link DaffProductTestingService} driver as the {@link DaffProductDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffProductTestingModule,
  ],
})
export class DaffProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductTestingDriverModule> {
    return {
      ngModule: DaffProductTestingDriverModule,
      providers: [
        provideDaffProductDriver(DaffTestingProductService),
        provideDaffProductCustomAttributeDriver(DaffTestingProductCustomAttributeService),
      ],
    };
  }
}

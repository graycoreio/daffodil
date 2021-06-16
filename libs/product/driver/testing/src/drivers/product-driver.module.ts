import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffProductDriver } from '@daffodil/product/driver';

import { DaffTestingProductService } from './product.service';

/**
 * Module for providing the {@link DaffProductTestingService} driver as the {@link DaffProductDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductTestingDriverModule> {
    return {
      ngModule: DaffProductTestingDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffTestingProductService,
        },
      ],
    };
  }
}

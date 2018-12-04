import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { _DAFFODIL_DRIVER_CONFIG, 
  DaffDriverConfig, 
  DaffDriverConfigService, 
  DaffDriverConfigServiceFactory, 
  DaffDriver 
} from '@daffodil/driver';

import { DaffShopifyDriver } from './shopify.driver';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffShopifyDriverModule {
  static forRoot(config: DaffDriverConfig): ModuleWithProviders {
    return {
      ngModule: DaffShopifyDriverModule,
      providers: [
        {
          provide: _DAFFODIL_DRIVER_CONFIG,
          useValue: config
        },
        {
          provide: DaffDriverConfigService,
          useFactory: DaffDriverConfigServiceFactory,
          deps: [_DAFFODIL_DRIVER_CONFIG]
        },
        {
          provide: DaffDriver,
          useExisting: DaffShopifyDriver
        }
      ]
    };
  }
}

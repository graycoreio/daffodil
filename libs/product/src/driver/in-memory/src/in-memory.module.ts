import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { _DAFFODIL_DRIVER_CONFIG, 
  DaffDriverConfig, 
  DaffDriverConfigService, 
  DaffDriverConfigServiceFactory, 
  DaffDriver 
} from '@daffodil/driver';

import { DaffInMemoryDriver } from './in-memory.driver';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffInMemoryDriverModule {
  static forRoot(config: DaffDriverConfig): ModuleWithProviders {
    return {
      ngModule: DaffInMemoryDriverModule,
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
          useExisting: DaffInMemoryDriver
        }
      ]
    };
  }
}

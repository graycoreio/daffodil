import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


import { _DAFFODIL_DRIVER_CONFIG, 
  DaffDriverConfig, 
  DaffDriverConfigService, 
  DaffDriverConfigServiceFactory, 
  DaffDriver 
} from '@daffodil/driver';


@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffMagentoDriverModule {
  static forRoot(config: DaffDriverConfig): ModuleWithProviders {
    return {
      ngModule: DaffMagentoDriverModule,
      providers: [
        {
          provide: _DAFFODIL_DRIVER_CONFIG,
          useValue: config
        },
        {
          provide: DaffDriverConfigService,
          useFactory: DaffDriverConfigServiceFactory,
          deps: [_DAFFODIL_DRIVER_CONFIG]
        }
      ]
    };
  }
}

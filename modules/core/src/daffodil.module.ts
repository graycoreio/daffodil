import { NgModule, ModuleWithProviders } from '@angular/core';

import { CoreProductModule } from '@daffodil/product/product.module';
import { DaffodilConfig } from '@daffodil/config/model';
import { DaffodilConfigService, DaffodilConfigServiceFactory } from '@daffodil/config/daffodil-config.service';
import { _DAFFODIL_CONFIG } from '@daffodil/tokens';

@NgModule({
  imports: [
    CoreProductModule
  ],
  exports: [
    CoreProductModule
  ]
})
export class DaffodilModule {

  static forRoot(config: DaffodilConfig): ModuleWithProviders {
    return {
      ngModule: DaffodilModule,
      providers: [
        {
          provide: _DAFFODIL_CONFIG,
          useValue: config
        },
        {
          provide: DaffodilConfigService, 
          useFactory: DaffodilConfigServiceFactory,
          deps: [_DAFFODIL_CONFIG]
        }
      ]
    };
  }
}

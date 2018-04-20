import { NgModule, ModuleWithProviders } from '@angular/core';

import { CoreProductModule } from '@daffodil/product/product.module';
import { DaffodilConfig } from '@daffodil/config/model';
import { DaffodilConfigService } from '@daffodil/config/daffodil-config.service';

let configValue;
let instantiateDaffodilConfigService = new DaffodilConfigService(configValue);

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
    configValue = config;
    return {
      ngModule: DaffodilModule,
      providers: [{provide: DaffodilConfigService, useValue: instantiateDaffodilConfigService}]
    };
  }
}

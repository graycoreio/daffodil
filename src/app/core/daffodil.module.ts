import { NgModule, ModuleWithProviders } from '@angular/core';

import { CoreProductModule } from '@daffodil/product/product.module';
import { DaffodilConfig } from '@daffodil/config/model';
import { DaffodilConfigService } from '@daffodil/config/daffodil-config.service';

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
      providers: [{provide: DaffodilConfigService, useValue: new DaffodilConfigService(config)}]
    };
  }
}

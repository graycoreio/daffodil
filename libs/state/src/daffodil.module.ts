import { NgModule, ModuleWithProviders } from '@angular/core';

import { StateProductModule } from './product/product.module';
import { DaffodilConfig } from '@daffodil/core';
import { DaffodilConfigService, DaffodilConfigServiceFactory } from './config/daffodil-config.service';
import { _DAFFODIL_CONFIG } from './tokens';
import { StateCartModule } from './cart/cart.module';
import { StateCheckoutModule } from './checkout/checkout.module';

@NgModule({
  imports: [
    StateProductModule,
    StateCartModule,
    StateCheckoutModule
  ],
  exports: [
    StateProductModule,
    StateCartModule,
    StateCheckoutModule
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

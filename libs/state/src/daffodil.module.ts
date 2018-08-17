import { NgModule, ModuleWithProviders } from '@angular/core';

import { DaffodilConfig } from '@daffodil/core';

import { StateCartModule } from './cart/cart.module';
import { StateCheckoutModule } from './checkout/checkout.module';
import { StateProductModule } from './product/product.module';
import { DaffodilConfigService, DaffodilConfigServiceFactory } from './config/daffodil-config.service';
import { _DAFFODIL_CONFIG } from './tokens';

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

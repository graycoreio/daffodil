import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffAuthorizeNetDriver } from './injection-tokens/authorize-net-driver.token';
import { DaffAuthorizeNetDefaultService } from './authorize-net.service';
import { DaffAuthorizeNetTransformer } from './injection-tokens/authorize-net-transformer.tokens';
import { DaffAuthorizeNetDefaultTransformerService } from './transformers/authorize-net-transformer.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffAuthorizeNetDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffAuthorizeNetDriverModule,
      providers: [
        {
          provide: DaffAuthorizeNetDriver,
					useExisting: DaffAuthorizeNetDefaultService
        },
        {
          provide: DaffAuthorizeNetTransformer,
					useExisting: DaffAuthorizeNetDefaultTransformerService
        }
      ]
    };
  }
}

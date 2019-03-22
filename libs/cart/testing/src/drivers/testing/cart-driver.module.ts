import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartDriver } from '@daffodil/cart';

import { DaffTestingCartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffTestingCartDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffTestingCartDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffTestingCartService
        }
      ]
    };
  }
}

import { NgModule } from '@angular/core';

import { CoreProductModule } from '@core/product/product.module';

@NgModule({
  imports: [
    CoreProductModule
  ],
  exports: [
    CoreProductModule
  ]
})
export class CoreModule { }

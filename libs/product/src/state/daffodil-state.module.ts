import { NgModule } from '@angular/core';

import { StateProductModule } from './product/product.module';

@NgModule({
  imports: [
    StateProductModule
  ],
  exports: [
    StateProductModule
  ]
})
export class DaffodilProductStateModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffOrderStateModule } from './order-state.module';
import { OrderContainer } from './containers/order.component';

/**
 * @deprecated
 */
@NgModule({
  imports: [
    CommonModule,
    /**
     * Ngrx/store
     */
    DaffOrderStateModule,
  ],
  declarations: [
    OrderContainer
  ],
  exports: [
    OrderContainer
  ]
})
export class DaffOrderModule { }

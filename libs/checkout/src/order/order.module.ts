import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderContainer } from './containers/order.component';
import { DaffOrderStateModule } from './order-state.module';

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
    OrderContainer,
  ],
  exports: [
    OrderContainer,
  ],
})
export class DaffOrderModule { }

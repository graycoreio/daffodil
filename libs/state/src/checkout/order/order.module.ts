import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateOrderStateModule } from './order-state.module';
import { OrderContainer } from './containers/order.component';

@NgModule({
  imports: [
    CommonModule,
    /**
     * Ngrx/store
     */
    StateOrderStateModule,
  ],
  declarations: [
    OrderContainer
  ],
  exports: [
    OrderContainer
  ]
})
export class StateOrderModule { }

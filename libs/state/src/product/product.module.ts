import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGridContainer } from './containers/product-grid/product-grid.component';
import { StateProductStateModule } from './product-state.module';
import { ProductContainer } from './containers/product/product.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    StateProductStateModule,
  ],
  declarations: [
    ProductGridContainer,
    ProductContainer
  ],
  exports: [
    ProductGridContainer,
    ProductContainer
  ]
})
export class StateProductModule { }

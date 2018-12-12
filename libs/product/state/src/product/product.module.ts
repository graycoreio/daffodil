import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGridContainer } from './containers/product-grid/product-grid.component';
import { StateProductStateModule } from './product-state.module';
import { ProductContainer } from './containers/product/product.component';
import { BestSellersContainer } from './containers/best-sellers/best-sellers.component';

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
    ProductContainer,
    BestSellersContainer
  ],
  exports: [
    ProductGridContainer,
    ProductContainer,
    BestSellersContainer
  ]
})
export class StateProductModule { }

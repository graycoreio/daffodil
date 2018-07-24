import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
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
  ],
  providers: [
    ProductService
  ]
})
export class StateProductModule { }

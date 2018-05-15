import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
import { ProductGridContainer } from './containers/product-grid/product-grid.component';
import { ProductTestingModule } from './testing/product-testing.module';
import { CoreProductStateModule } from './product-state.module';
import { ProductContainer } from './containers/product/product.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    CoreProductStateModule,
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
export class CoreProductModule { }

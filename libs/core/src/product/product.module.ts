import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
import { ProductListContainer } from './containers/product-list/product-list.component';
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
    ProductListContainer,
    ProductContainer
  ],
  exports: [
    ProductListContainer,
    ProductContainer
  ],
  providers: [
    ProductService
  ]
})
export class CoreProductModule { }

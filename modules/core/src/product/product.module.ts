import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
import { ProductListContainer } from './containers/product-list/product-list.component';
import { ProductTestingModule } from './testing/product-testing.module';
import { CoreProductStateModule } from './product-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    CoreProductStateModule,
  ],
  declarations: [
    ProductListContainer
  ],
  exports: [
    ProductListContainer
  ],
  providers: [
    ProductService
  ]
})
export class CoreProductModule { }

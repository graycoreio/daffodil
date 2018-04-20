import { NgModule } from '@angular/core';

import { environment } from 'environments/environment';
import { ProductService } from '@daffodil/product/services/product.service';
import { ProductListContainer } from '@daffodil/product/containers/product-list/product-list.component';
import { ProductTestingModule } from '@daffodil/product/testing/product-testing.module';
import { CoreProductStateModule } from '@daffodil/product/product-state.module';
import { CommonModule } from '@angular/common';

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

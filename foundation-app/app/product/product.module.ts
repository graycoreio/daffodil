import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreProductModule } from '@daffodil/core/product.module';
import { ProductListComponent } from '@daffodil/core/product/components/product-list/product-list.component';

import { ProductListViewComponent } from './pages/product-list-view/product-list-view.component';

@NgModule({
  imports: [
    CommonModule,

    CoreProductModule,
  ],
  declarations: [
    ProductListComponent,
    ProductListViewComponent
  ],
  exports: [
    ProductListComponent,
    ProductListViewComponent
  ]
})
export class ProductModule { }

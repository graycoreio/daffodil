import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreProductModule } from '@daffodil/core';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductListViewComponent } from './pages/product-list-view/product-list-view.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [
    CommonModule,

    CoreProductModule,
  ],
  declarations: [
    ProductListComponent,
    ProductListViewComponent,
    ProductComponent
  ],
  exports: [
    ProductListComponent,
    ProductListViewComponent,
    ProductComponent
  ]
})
export class ProductModule { }

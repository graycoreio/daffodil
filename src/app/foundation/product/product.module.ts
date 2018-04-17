import { NgModule } from '@angular/core';
import { ProductListComponent } from '../product/components/product-list/product-list.component';
import { CoreProductModule } from '@core/product/product.module';
import { ProductListViewComponent } from './pages/product-list-view/product-list-view.component';
import { CommonModule } from '@angular/common';

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

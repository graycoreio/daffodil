import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';
import { ProductCardModule } from '../product-card/product-card.module';
import { ProductGridComponent } from './product-grid.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingIconModule,
    ProductCardModule
  ],
  declarations: [
    ProductGridComponent
  ],
  exports: [
    ProductGridComponent
  ]
})
export class ProductGridModule { }

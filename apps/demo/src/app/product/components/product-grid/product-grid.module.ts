import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design';

import { ProductGridComponent } from './product-grid.component';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductCardModule,
  ],
  declarations: [
    ProductGridComponent,
  ],
  exports: [
    ProductGridComponent,
  ],
})
export class ProductGridModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design';

import { ProductCardModule } from '../product-card/product-card.module';
import { ProductGridComponent } from './product-grid.component';

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

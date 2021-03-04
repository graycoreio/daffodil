import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductCardComponent,
  ],
  exports: [
    ProductCardComponent,
  ],
})
export class ProductCardModule { }

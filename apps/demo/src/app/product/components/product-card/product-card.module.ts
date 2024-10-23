import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ProductCardComponent,
  ],
  exports: [
    ProductCardComponent,
  ],
})
export class ProductCardModule { }

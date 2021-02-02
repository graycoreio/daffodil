import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductAddedComponent } from './product-added.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductAddedComponent,
  ],
  exports: [
    ProductAddedComponent,
  ],
})
export class ProductAddedModule { }

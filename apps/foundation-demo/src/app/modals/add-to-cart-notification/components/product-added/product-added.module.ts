import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddedComponent } from './product-added.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductAddedComponent
  ],
  exports: [
    ProductAddedComponent
  ]
})
export class ProductAddedModule { }

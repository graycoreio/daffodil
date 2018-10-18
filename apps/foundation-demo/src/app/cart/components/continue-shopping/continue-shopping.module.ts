import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinueShoppingDirective } from './continue-shopping.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContinueShoppingDirective
  ],
  exports: [
    ContinueShoppingDirective
  ]
})
export class ContinueShoppingModule { }

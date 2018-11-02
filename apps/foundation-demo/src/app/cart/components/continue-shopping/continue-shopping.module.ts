import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinueShoppingDirective } from './continue-shopping.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ContinueShoppingDirective
  ],
  exports: [
    ContinueShoppingDirective
  ]
})
export class ContinueShoppingModule { }

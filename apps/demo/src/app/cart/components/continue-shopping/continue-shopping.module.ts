import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinueShoppingComponent } from './continue-shopping.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ContinueShoppingComponent
  ],
  exports: [
    ContinueShoppingComponent
  ]
})
export class ContinueShoppingModule { }

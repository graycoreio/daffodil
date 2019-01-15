import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProceedToCheckoutDirective } from './proceed-to-checkout.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProceedToCheckoutDirective
  ],
  exports: [
    ProceedToCheckoutDirective
  ]
})
export class ProceedToCheckoutModule { }

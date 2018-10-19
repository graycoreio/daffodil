import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProceedToCheckoutDirective } from './proceed-to-checkout.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProceedToCheckoutDirective
  ],
  exports: [
    ProceedToCheckoutDirective
  ]
})
export class ProceedToCheckoutModule { }

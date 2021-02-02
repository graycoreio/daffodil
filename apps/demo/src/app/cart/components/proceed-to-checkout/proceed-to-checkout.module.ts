import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProceedToCheckoutDirective } from './proceed-to-checkout.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ProceedToCheckoutDirective,
  ],
  exports: [
    ProceedToCheckoutDirective,
  ],
})
export class ProceedToCheckoutModule { }

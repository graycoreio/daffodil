import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProceedToCheckoutComponent } from './proceed-to-checkout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProceedToCheckoutComponent
  ],
  exports: [
    ProceedToCheckoutComponent
  ]
})
export class ProceedToCheckoutModule { }

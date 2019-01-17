import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProceedToCheckoutComponent } from './proceed-to-checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProceedToCheckoutComponent
  ],
  exports: [
    ProceedToCheckoutComponent
  ]
})
export class ProceedToCheckoutModule { }

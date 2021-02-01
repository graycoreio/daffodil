import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPaypalStateModule } from './paypal-state.module';

@NgModule({
  imports: [
    CommonModule,
    DaffPaypalStateModule,
  ],
})
export class DaffPaypalModule { }

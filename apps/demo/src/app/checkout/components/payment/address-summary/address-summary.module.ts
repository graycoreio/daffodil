import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddressSummaryComponent } from './address-summary.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AddressSummaryComponent,
  ],
  exports: [
    AddressSummaryComponent,
  ],
})
export class AddressSummaryModule { }

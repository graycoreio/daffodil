import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressSummaryComponent } from './address-summary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddressSummaryComponent
  ],
  exports: [
    AddressSummaryComponent
  ]
})
export class AddressSummaryModule { }

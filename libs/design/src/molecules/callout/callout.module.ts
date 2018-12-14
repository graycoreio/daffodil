import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCalloutComponent } from './callout.component';
import { DaffCalloutTitleComponent } from './callout-title/callout-title.component';
import { DaffCalloutBodyComponent } from './callout-body/callout-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffCalloutComponent,
    DaffCalloutTitleComponent,
    DaffCalloutBodyComponent
  ],
  exports: [
    DaffCalloutComponent,
    DaffCalloutTitleComponent,
    DaffCalloutBodyComponent
  ]
})

export class DaffCalloutModule { }
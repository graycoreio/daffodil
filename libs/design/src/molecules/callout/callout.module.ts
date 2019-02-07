import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCalloutComponent } from './callout/callout.component';
import { DaffCalloutTitleDirective } from './callout-title/callout-title.directive';
import { DaffCalloutSubtitleDirective } from './callout-subtitle/callout-subtitle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffCalloutComponent,
    DaffCalloutTitleDirective,
    DaffCalloutSubtitleDirective
  ],
  exports: [
    DaffCalloutComponent,
    DaffCalloutSubtitleDirective,
    DaffCalloutTitleDirective
  ]
})

export class DaffCalloutModule { }
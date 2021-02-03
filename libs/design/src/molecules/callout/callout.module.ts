import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCalloutComponent } from './callout/callout.component';
import { DaffCalloutTitleDirective } from './callout-title/callout-title.directive';
import { DaffCalloutSubtitleDirective } from './callout-subtitle/callout-subtitle.directive';
import { DaffCalloutTaglineDirective } from './callout-tagline/callout-tagline.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffCalloutComponent,
    DaffCalloutTitleDirective,
    DaffCalloutSubtitleDirective,
    DaffCalloutTaglineDirective
  ],
  exports: [
    DaffCalloutComponent,
    DaffCalloutSubtitleDirective,
    DaffCalloutTitleDirective,
    DaffCalloutTaglineDirective
  ]
})

export class DaffCalloutModule { }
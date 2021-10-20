import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCalloutBodyDirective } from './callout-body/callout-body.directive';
import { DaffCalloutIconDirective } from './callout-icon/callout-icon.directive';
import { DaffCalloutSubtitleDirective } from './callout-subtitle/callout-subtitle.directive';
import { DaffCalloutTaglineDirective } from './callout-tagline/callout-tagline.directive';
import { DaffCalloutTitleDirective } from './callout-title/callout-title.directive';
import { DaffCalloutComponent } from './callout/callout.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffCalloutComponent,
    DaffCalloutIconDirective,
    DaffCalloutTitleDirective,
    DaffCalloutSubtitleDirective,
    DaffCalloutTaglineDirective,
    DaffCalloutBodyDirective,
  ],
  exports: [
    DaffCalloutComponent,
    DaffCalloutIconDirective,
    DaffCalloutSubtitleDirective,
    DaffCalloutTitleDirective,
    DaffCalloutTaglineDirective,
    DaffCalloutBodyDirective,
  ],
})

export class DaffCalloutModule { }

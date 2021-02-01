import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCalloutSubtitleDirective } from './callout-subtitle/callout-subtitle.directive';
import { DaffCalloutTitleDirective } from './callout-title/callout-title.directive';
import { DaffCalloutComponent } from './callout/callout.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffCalloutComponent,
    DaffCalloutTitleDirective,
    DaffCalloutSubtitleDirective,
  ],
  exports: [
    DaffCalloutComponent,
    DaffCalloutSubtitleDirective,
    DaffCalloutTitleDirective,
  ],
})

export class DaffCalloutModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCalloutComponent } from './callout/callout.component';
import { DaffCalloutBodyDirective } from './callout-body/callout-body.directive';
import { DaffCalloutIconDirective } from './callout-icon/callout-icon.directive';
import { DaffCalloutSubtitleDirective } from './callout-subtitle/callout-subtitle.directive';
import { DaffCalloutTaglineDirective } from './callout-tagline/callout-tagline.directive';
import { DaffCalloutTitleDirective } from './callout-title/callout-title.directive';

/**
 * @deprecated in favor of {@link DAFF_CALLOUT_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
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

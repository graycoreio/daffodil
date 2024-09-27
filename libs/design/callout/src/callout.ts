import { DaffCalloutComponent } from './callout/callout.component';
import { DaffCalloutBodyDirective } from './callout-body/callout-body.directive';
import { DaffCalloutIconDirective } from './callout-icon/callout-icon.directive';
import { DaffCalloutSubtitleDirective } from './callout-subtitle/callout-subtitle.directive';
import { DaffCalloutTaglineDirective } from './callout-tagline/callout-tagline.directive';
import { DaffCalloutTitleDirective } from './callout-title/callout-title.directive';

export const DAFF_CALLOUT_COMPONENTS = <const>[
  DaffCalloutComponent,
  DaffCalloutIconDirective,
  DaffCalloutTitleDirective,
  DaffCalloutSubtitleDirective,
  DaffCalloutTaglineDirective,
  DaffCalloutBodyDirective,
];

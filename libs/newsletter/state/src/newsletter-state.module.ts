import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffNewsletterEffects } from './effects/newsletter.effects';
import { DAFF_NEWSLETTER_STORE_FEATURE_KEY } from './reducers/newsletter-store-feature-key';
import { daffNewsletterStateReducer } from './reducers/newsletter.reducer';

/**
 * @deprecated in favor of {@link provideDaffNewsletterState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(DAFF_NEWSLETTER_STORE_FEATURE_KEY, daffNewsletterStateReducer),
    EffectsModule.forFeature([
      DaffNewsletterEffects,
    ]),
  ],
})
export class DaffNewsletterStateModule { }

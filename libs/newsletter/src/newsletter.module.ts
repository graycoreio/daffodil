import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffNewsletterEffects } from './effects/newsletter.effects';
import { reducer } from './reducers/newsletter.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('newsletter', reducer),
    EffectsModule.forFeature([
      DaffNewsletterEffects,
    ]),
  ],
})
export class DaffNewsletterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/newsletter.reducer'
import { EffectsModule } from '@ngrx/effects';
import { DaffNewsletterEffects } from './effects/newsletter.effects';

@NgModule({
  imports: [
      CommonModule,
       StoreModule.forFeature('newsletter', reducer),
       EffectsModule.forFeature([
         DaffNewsletterEffects
       ])
  ]
})
export class DaffNewsletterModule { }

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { DaffNewsletterEffects } from 'libs/newsletter/src/effects/newsletter.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffNewsletterEffects
    ])
  ]
})
export class DemoNewslettterStateModule {}
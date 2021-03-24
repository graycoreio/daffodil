import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffNewsletterEffects } from '@daffodil/newsletter/state';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffNewsletterEffects,
    ]),
  ],
})
export class DemoNewslettterStateModule {}

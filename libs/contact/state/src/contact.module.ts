import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffContactEffects } from './effects/contact.effects';
import { DAFF_CONTACT_STORE_FEATURE_KEY } from './reducers/contact-store-feature-key';
import { daffContactStateReducer } from './reducers/contact.reducer';

/**
 * @deprecated in favor of {@link provideDaffContactState}
 */
@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(DAFF_CONTACT_STORE_FEATURE_KEY, daffContactStateReducer),
    EffectsModule.forFeature([DaffContactEffects]),
  ],
  providers: [],
})
export class DaffContactStateModule { }

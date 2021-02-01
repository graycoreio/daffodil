import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffNavigationEffects } from './effects/navigation.effects';
import { daffNavigationReducers } from './reducers/navigation-reducers';
import { DAFF_NAVIGATION_STORE_FEATURE_KEY } from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_NAVIGATION_STORE_FEATURE_KEY, daffNavigationReducers),
    EffectsModule.forFeature([DaffNavigationEffects]),
  ],
})
export class DaffNavigationStateModule { }

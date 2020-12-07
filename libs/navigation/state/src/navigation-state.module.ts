import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { daffNavigationReducers } from './reducers/navigation-reducers';
import { DaffNavigationEffects } from './effects/navigation.effects';
import { DAFF_NAVIGATION_STORE_FEATURE_KEY } from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_NAVIGATION_STORE_FEATURE_KEY, daffNavigationReducers),
    EffectsModule.forFeature([DaffNavigationEffects]),
  ]
})
export class DaffNavigationStateModule { }

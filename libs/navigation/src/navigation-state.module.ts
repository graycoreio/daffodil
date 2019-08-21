import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { navigationReducers } from './reducers/navigation-reducers';
import { DaffNavigationEffects } from './effects/navigation.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('navigation', navigationReducers),
    EffectsModule.forFeature([DaffNavigationEffects]),
  ]
})
export class DaffNavigationStateModule { }

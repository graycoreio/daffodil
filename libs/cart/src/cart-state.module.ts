import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { daffCartReducers } from './reducers';
import { DaffCartEffects } from './effects/cart.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('cart', daffCartReducers),
    EffectsModule.forFeature([
      DaffCartEffects
    ]),
  ]
})
export class DaffCartStateModule { }

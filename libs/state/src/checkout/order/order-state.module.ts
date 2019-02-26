import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './effects/order.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('order', reducers),
    EffectsModule.forFeature([
      OrderEffects
    ])
  ]
})
export class StateOrderStateModule { }

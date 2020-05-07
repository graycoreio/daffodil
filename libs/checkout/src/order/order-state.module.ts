import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './effects/order.effects';
import { daffOrderReducers } from './reducers/order-reducers';

/**
 * @deprecated
 */
@NgModule({
  imports: [
    StoreModule.forFeature('order', daffOrderReducers),
    EffectsModule.forFeature([
      OrderEffects
    ])
  ]
})
export class DaffOrderStateModule { }

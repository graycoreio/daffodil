import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DAFF_ORDER_STORE_FEATURE_KEY, daffOrderReducers } from './reducers/public_api';
import { DaffOrderEffects } from './effects/order.effects';
import { DaffPlacedOrderGuardRedirectUrl } from './guards/public_api';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffOrderEffects,
    ]),
    StoreModule.forFeature(DAFF_ORDER_STORE_FEATURE_KEY, daffOrderReducers),
  ],
  providers: [
		{ provide: DaffPlacedOrderGuardRedirectUrl, useValue: '/' },
  ]
})
export class DaffOrderStateModule {}

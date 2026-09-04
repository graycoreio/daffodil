import {
  inject,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { daffComposeReducers } from '@daffodil/core/state';

import { DaffOrderCollectionEffects } from './effects/order-collection.effects';
import { DaffOrderEffects } from './effects/order.effects';
import { daffOrderReducer } from './reducers/order/order.reducer';
import { daffOrderEntitiesReducer } from './reducers/order-entities/public_api';
import {
  daffOrdersCollectionReducer,
  DAFF_ORDER_STORE_FEATURE_KEY,
} from './reducers/public_api';
import { DAFF_ORDER_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_ORDER_REDUCERS,
  provideDaffOrderReducersFactory,
} from './reducers/token/reducers.token';

@NgModule({
  imports: [
    DaffCartStateModule,
    EffectsModule.forFeature([
      DaffOrderEffects,
      DaffOrderCollectionEffects,
    ]),
    StoreModule.forFeature(DAFF_ORDER_STORE_FEATURE_KEY, DAFF_ORDER_REDUCERS),
  ],
  providers: [
    provideDaffOrderReducersFactory(() => daffComposeReducers([
      combineReducers({
        order: daffOrderReducer,
        orders: daffOrderEntitiesReducer,
        collection: daffOrdersCollectionReducer,
      }),
      ...inject(DAFF_ORDER_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffOrderStateModule {}

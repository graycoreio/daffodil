import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DaffProductGridEffects } from './effects/product-grid.effects';
import { DaffProductEffects } from './effects/product.effects';
import { DaffBestSellersEffects } from './effects/best-seller.effects';
import { daffProductReducers } from './reducers/product-reducers';

@NgModule({
  imports: [
      StoreModule.forFeature('product', daffProductReducers),
      EffectsModule.forFeature([
        DaffProductGridEffects,
        DaffProductEffects,
        DaffBestSellersEffects
      ]),
  ]
})
export class DaffProductStateModule { }

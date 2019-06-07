import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DaffProductGridEffects } from './effects/product-grid.effects';
import { DaffProductEffects } from './effects/product.effects';
import { reducers } from './reducers/index';
import { DaffBestSellersEffects } from './effects/best-seller.effects';

@NgModule({
  imports: [
      StoreModule.forFeature('product', reducers),
      EffectsModule.forFeature([
        DaffProductGridEffects,
        DaffProductEffects,
        DaffBestSellersEffects
      ]),
  ]
})
export class StateProductStateModule { }

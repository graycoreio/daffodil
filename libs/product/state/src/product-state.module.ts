import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffBestSellersEffects } from './effects/best-seller.effects';
import { DaffProductGridEffects } from './effects/product-grid.effects';
import { DaffProductPageEffects } from './effects/product-page.effects';
import { DaffProductEffects } from './effects/product.effects';
import { daffProductReducers } from './reducers/product-reducers';
import { DAFF_PRODUCT_STORE_FEATURE_KEY } from './reducers/product-store-feature-key';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_PRODUCT_STORE_FEATURE_KEY, daffProductReducers),
    EffectsModule.forFeature([
      DaffProductGridEffects,
      DaffProductEffects,
      DaffProductPageEffects,
      DaffBestSellersEffects,
    ]),
  ],
})
export class DaffProductStateModule { }

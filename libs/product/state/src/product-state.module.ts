import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffBestSellersEffects } from './effects/best-seller.effects';
import { DaffProductGridEffects } from './effects/product-grid.effects';
import { DaffProductPageEffects } from './effects/product-page.effects';
import { DaffProductEffects } from './effects/product.effects';
import { DAFF_PRODUCT_STORE_CONFIG } from './reducers/injection-tokens/config.token';
import { DAFF_PRODUCT_REDUCERS } from './reducers/injection-tokens/reducers.token';
import { DAFF_PRODUCT_STORE_FEATURE_KEY } from './reducers/public_api';

/**
 * A module that provides the default reducers and effects for the product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_REDUCERS, DAFF_PRODUCT_STORE_CONFIG),
    EffectsModule.forFeature([
      DaffProductGridEffects,
      DaffProductEffects,
      DaffProductPageEffects,
      DaffBestSellersEffects,
    ]),
  ],
})
export class DaffProductStateModule { }

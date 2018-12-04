import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductGridEffects } from './effects/product-grid.effects';
import { ProductEffects } from './effects/product.effects';
import { reducers } from './reducers/index';
import { BestSellersEffects } from './effects/best-seller.effects';

@NgModule({
  imports: [
      StoreModule.forFeature('product', reducers),
      EffectsModule.forFeature([
        ProductGridEffects,
        ProductEffects,
        BestSellersEffects
      ]),
  ]
})
export class StateProductStateModule { }

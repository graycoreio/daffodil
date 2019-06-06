import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductGridEffects } from 'product/src/effects/product-grid.effects';
import { ProductEffects } from 'product/src/effects/product.effects';
import { reducers } from 'product/src/reducers/index';
import { BestSellersEffects } from 'product/src/effects/best-seller.effects';

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

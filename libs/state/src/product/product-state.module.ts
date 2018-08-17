import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductGridEffects } from './effects/product-grid.effects';
import { ProductEffects } from './effects/product.effects';
import { reducers } from './reducers/index';

@NgModule({
  imports: [
      StoreModule.forFeature('product', reducers),
      EffectsModule.forFeature([
        ProductGridEffects,
        ProductEffects
      ]),
  ]
})
export class StateProductStateModule { }

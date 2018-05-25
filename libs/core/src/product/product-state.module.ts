import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';

import { ProductGridEffects } from './effects/product-grid.effects';
import { ProductEffects } from './effects/product.effects';

@NgModule({
  imports: [
      StoreModule.forFeature('product', reducers),
      EffectsModule.forFeature([
        ProductGridEffects,
        ProductEffects
      ]),
  ]
})
export class CoreProductStateModule { }

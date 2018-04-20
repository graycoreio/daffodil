import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '@daffodil/product/reducers';

import { ProductListEffects } from '@daffodil/product/effects/product-list.effects';

@NgModule({
  imports: [
      StoreModule.forFeature('product', reducers),
      EffectsModule.forFeature([
        ProductListEffects
      ]),
  ]
})
export class CoreProductStateModule { }

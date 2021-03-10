import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffProductStateModule } from '@daffodil/product/state';

import { DaffCategoryPageEffects } from './effects/category-page.effects';
import { DaffCategoryEffects } from './effects/category.effects';
import { daffCategoryReducers } from './reducers/category-reducers';
import { DAFF_CATEGORY_STORE_FEATURE_KEY } from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CATEGORY_STORE_FEATURE_KEY, daffCategoryReducers),
    EffectsModule.forFeature([DaffCategoryEffects, DaffCategoryPageEffects]),
    DaffProductStateModule,
  ],
})
export class DaffCategoryStateModule { }

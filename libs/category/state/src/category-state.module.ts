import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  daffProductProvideExtraReducers,
  DaffProductStateModule,
} from '@daffodil/product/state';

import { DaffCategoryPageFilterEffects } from './effects/category-page-filter.effects';
import { DaffCategoryPageEffects } from './effects/category-page.effects';
import { DaffCategoryEffects } from './effects/category.effects';
import { daffCategoryReducers } from './reducers/category-reducers';
import { daffCategoryProductReducer } from './reducers/product.reducer';
import { DAFF_CATEGORY_STORE_FEATURE_KEY } from './reducers/public_api';

/**
 * A module that provides default reducers and effects for the category redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CATEGORY_STORE_FEATURE_KEY, daffCategoryReducers),
    EffectsModule.forFeature([DaffCategoryEffects, DaffCategoryPageEffects, DaffCategoryPageFilterEffects]),
    DaffProductStateModule,
  ],
  providers: [
    ...daffProductProvideExtraReducers(
      daffCategoryProductReducer,
    ),
  ],
})
export class DaffCategoryStateModule {}

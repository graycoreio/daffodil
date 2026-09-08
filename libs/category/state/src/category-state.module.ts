import {
  inject,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
import { DaffProductStateModule } from '@daffodil/product/state';

import { DaffCategoryPageMetadataEffects } from './effects/category-page-metadata.effects';
import { DaffCategoryPageEffects } from './effects/category-page.effects';
import { DaffCategoryEffects } from './effects/category.effects';
import { daffCategoryReducers } from './reducers/category-reducers';
import { DAFF_CATEGORY_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CATEGORY_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CATEGORY_REDUCERS,
  provideDaffCategoryReducersFactory,
} from './reducers/token/reducers.token';

/**
 * A module that provides default reducers and effects for the category redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CATEGORY_STORE_FEATURE_KEY, DAFF_CATEGORY_REDUCERS),
    EffectsModule.forFeature([DaffCategoryEffects, DaffCategoryPageEffects, DaffCategoryPageMetadataEffects]),
    DaffProductStateModule,
  ],
  providers: [
    provideDaffCategoryReducersFactory(() => daffComposeReducers([
      combineReducers(daffCategoryReducers),
      ...inject(DAFF_CATEGORY_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffCategoryStateModule {}

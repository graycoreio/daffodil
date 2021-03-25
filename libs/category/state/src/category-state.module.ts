import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffProductStateModule } from '@daffodil/product/state';

import {
  DaffCategoryStateConfiguration,
  DaffCategoryStateConfigurationToken,
  defaultDaffCategoryStateConfiguration,
} from './config/config';
import { DaffDefaultCategoryPageSize } from './config/default-category-page-size.token';
import { DaffCategoryPageFilterEffects } from './effects/category-page-filter.effects';
import { DaffCategoryPageEffects } from './effects/category-page.effects';
import { DaffCategoryEffects } from './effects/category.effects';
import { daffCategoryReducers } from './reducers/category-reducers';
import { DAFF_CATEGORY_STORE_FEATURE_KEY } from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CATEGORY_STORE_FEATURE_KEY, daffCategoryReducers),
    EffectsModule.forFeature([DaffCategoryEffects, DaffCategoryPageEffects, DaffCategoryPageFilterEffects]),
    DaffProductStateModule,
  ],
})
export class DaffCategoryStateModule {
  static forRoot(config: DaffCategoryStateConfiguration = defaultDaffCategoryStateConfiguration): ModuleWithProviders<DaffCategoryStateModule> {
    return {
      ngModule: DaffCategoryStateModule,
      providers: [
        { provide: DaffCategoryStateConfigurationToken, useValue: config },
        { provide: DaffDefaultCategoryPageSize, useValue: config.defaultPageSize },
      ],
    };
  }
}

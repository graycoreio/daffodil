import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { categoryReducers } from './reducers/category-reducers';
import { DaffCategoryEffects } from './effects/category.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('category', categoryReducers),
    EffectsModule.forFeature([DaffCategoryEffects]),
  ]
})
export class DaffCategoryStateModule { }

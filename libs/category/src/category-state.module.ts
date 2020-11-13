import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { daffCategoryReducers } from './reducers/category-reducers';
import { DaffCategoryEffects } from './effects/category.effects';
import { DaffDefaultCategoryPageSize } from './resolvers/default-category-page-size.token';

@NgModule({
  imports: [
    StoreModule.forFeature('category', daffCategoryReducers),
    EffectsModule.forFeature([DaffCategoryEffects]),
	],
	providers: [
		{ provide: DaffDefaultCategoryPageSize, useValue: 12 }
	]
})
export class DaffCategoryStateModule { }

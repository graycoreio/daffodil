import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffCategoryPageEffects } from './effects/category-page.effects';
import { DaffCategoryEffects } from './effects/category.effects';
import { daffCategoryReducers } from './reducers/category-reducers';
import { DaffDefaultCategoryPageSize } from './resolvers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature('category', daffCategoryReducers),
    EffectsModule.forFeature([DaffCategoryEffects, DaffCategoryPageEffects]),
  ],
  providers: [
    { provide: DaffDefaultCategoryPageSize, useValue: 12 },
  ],
})
export class DaffCategoryStateModule { }

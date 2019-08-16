import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers/index';

@NgModule({
  imports: [
      StoreModule.forFeature('category', reducers),
      EffectsModule.forFeature([]),
  ]
})
export class DaffCategoryStateModule { }

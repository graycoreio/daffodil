import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCategoryStateModule } from './category-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffCategoryStateModule,
  ]
})
export class DaffCategoryModule { }

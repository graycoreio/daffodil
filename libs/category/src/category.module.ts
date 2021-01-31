import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProductModule } from '@daffodil/product';

import { DaffCategoryStateModule } from './category-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffCategoryStateModule,
    DaffProductModule,
  ],
})
export class DaffCategoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCategoryStateModule } from './category-state.module';
import { DaffProductModule } from '@daffodil/product';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffCategoryStateModule,
    DaffProductModule
  ]
})
export class DaffCategoryModule { }

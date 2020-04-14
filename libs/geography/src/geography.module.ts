import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffGeographyStateModule } from './geography-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffGeographyStateModule,
  ]
})
export class DaffGeographyModule {}

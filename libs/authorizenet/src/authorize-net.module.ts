import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffAuthorizeNetStateModule } from './authorize-net-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffAuthorizeNetStateModule
  ]
})
export class DaffAuthorizeNetModule {}

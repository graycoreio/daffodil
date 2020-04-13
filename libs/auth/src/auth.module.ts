import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffAuthStateModule } from './auth-state.module';

@NgModule({
  imports: [
    CommonModule,
    DaffAuthStateModule
  ],
})
export class DaffAuthModule { }

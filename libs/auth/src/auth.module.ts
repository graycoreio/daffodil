import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffAuthStateModule } from './auth-state.module';

@NgModule({
  imports: [
    CommonModule,
    DaffAuthStateModule,
  ],
})
export class DaffAuthModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffAuthStateModule } from '@daffodil/auth/state';

import { DemoAuthStateModule } from './auth-state.module';

@NgModule({
  imports: [
    CommonModule,
    DaffAuthStateModule,
    DemoAuthStateModule,
  ],
})
export class AuthModule { }

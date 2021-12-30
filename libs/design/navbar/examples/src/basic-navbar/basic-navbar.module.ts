import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffButtonModule,
  DaffContainerModule,
  DaffNavbarModule,
} from '@daffodil/design';

import { BasicNavbarComponent } from './basic-navbar.component';

@NgModule({
  declarations: [
    BasicNavbarComponent,
  ],
  imports: [
    CommonModule,

    DaffNavbarModule,
    DaffButtonModule,
    DaffContainerModule,
  ],
})
export class BasicNavbarModule { }

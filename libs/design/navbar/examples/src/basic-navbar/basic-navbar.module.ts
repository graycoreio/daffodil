import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffContainerModule,
  DaffNavbarModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

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

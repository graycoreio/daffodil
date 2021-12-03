import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffButtonModule,
  DaffContainerModule,
  DaffNavbarModule,
} from '@daffodil/design';

import { ContainedNavbarComponent } from './contained-navbar.component';

@NgModule({
  declarations: [
    ContainedNavbarComponent,
  ],
  imports: [
    CommonModule,

    DaffNavbarModule,
    DaffButtonModule,
    DaffContainerModule,
  ],
})
export class ContainedNavbarModule { }

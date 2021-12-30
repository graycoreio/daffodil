import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffButtonModule,
  DaffNavbarModule,
} from '@daffodil/design';

import { RaisedNavbarComponent } from './raised-navbar.component';

@NgModule({
  declarations: [
    RaisedNavbarComponent,
  ],
  imports: [
    CommonModule,

    DaffNavbarModule,
    DaffButtonModule,
  ],
})
export class RaisedNavbarModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNavbarModule } from '@daffodil/design/navbar';

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

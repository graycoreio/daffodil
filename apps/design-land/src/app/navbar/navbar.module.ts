import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { DesignLandNavbarRoutingModule } from './navbar-routing.module';

import {
  DaffNavbarModule,
  DaffButtonModule
} from '@daffodil/design';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DesignLandNavbarRoutingModule,

    DaffNavbarModule,
    DaffButtonModule
  ]
})
export class NavbarModule { }

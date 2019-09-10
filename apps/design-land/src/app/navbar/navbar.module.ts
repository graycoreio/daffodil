import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { DaffNavbarModule } from '@daffodil/design';
import { DesignLandNavbarRoutingModule } from './navbar-routing.module';

import { DaffLinkModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design';
@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DaffNavbarModule,
    DesignLandNavbarRoutingModule,
    DaffButtonModule,
    DaffLinkModule
  ]
})
export class NavbarModule { }

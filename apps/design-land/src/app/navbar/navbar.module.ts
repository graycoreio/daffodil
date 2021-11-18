import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffNavbarModule,
  DaffButtonModule,
  DaffContainerModule,
} from '@daffodil/design';


import { DesignLandNavbarRoutingModule } from './navbar-routing.module';
import { DesignLandNavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    DesignLandNavbarComponent,
  ],
  imports: [
    CommonModule,
    DesignLandNavbarRoutingModule,
    DaffContainerModule,
    DaffNavbarModule,
    DaffButtonModule,
  ],
})
export class DesignLandNavbarModule { }

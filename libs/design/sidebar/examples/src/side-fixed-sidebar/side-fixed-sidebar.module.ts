import { NgModule } from '@angular/core';

import {
  DaffSidebarModule,
  DaffNavbarModule,
  DaffLinkSetModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { SideFixedSidebarComponent } from './side-fixed-sidebar.component';

@NgModule({
  imports: [
    DaffSidebarModule,
    DaffNavbarModule,
    DaffButtonModule,
    DaffLinkSetModule,
  ],
  declarations: [
    SideFixedSidebarComponent,
  ],
  exports: [
    SideFixedSidebarComponent,
  ],
})
export class SideFixedSidebarModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffNavbarModule,
  DaffSidebarModule,
} from '@daffodil/design';

import { SideFixedSidebarComponent } from './side-fixed-sidebar.component';

@NgModule({
  imports: [
    CommonModule,

    DaffSidebarModule,
    DaffNavbarModule,
  ],
  declarations: [
    SideFixedSidebarComponent,
  ],
  exports: [
    SideFixedSidebarComponent,
  ],
})
export class SideFixedSidebarModule { }

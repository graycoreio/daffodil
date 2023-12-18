import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffNavbarModule } from '@daffodil/design';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

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

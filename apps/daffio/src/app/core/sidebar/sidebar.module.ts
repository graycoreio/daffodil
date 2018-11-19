import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarModule, DaffButtonModule } from '@daffodil/design';

import { DaffioSidebarStateModule } from './sidebar.state.module';
import { SidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarContainer } from './containers/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule
  ],
  declarations: [
    SidebarViewportContainer,
    DaffioSidebarContainer
  ],
  exports: [
    SidebarViewportContainer,
    DaffioSidebarContainer
  ]
})
export class DaffioSidebarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarModule, DaffButtonModule } from '@daffodil/design';

import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarContainer } from './containers/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule
  ],
  declarations: [
    DaffSidebarViewportContainer,
    DaffioSidebarContainer
  ],
  exports: [
    DaffSidebarViewportContainer,
    DaffioSidebarContainer
  ]
})
export class DaffioSidebarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '@daffodil/design';

import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarContainer } from './containers/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioSidebarStateModule,
    DaffSidebarModule
  ],
  declarations: [
    DaffioSidebarViewportContainer,
    DaffioSidebarContainer
  ],
  exports: [
    DaffioSidebarViewportContainer,
    DaffioSidebarContainer
  ]
})
export class DaffioSidebarModule { }

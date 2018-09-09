import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '../../design/molecules/sidebar/sidebar.module';
import { FoundationSidebarStateModule } from './sidebar.state.module';
import { SidebarViewportContainer } from './containers/sidebar-viewport.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FoundationSidebarStateModule,
    DaffSidebarModule
  ],
  declarations: [
    SidebarViewportContainer
  ],
  exports: [
    SidebarViewportContainer
  ]
})
export class SidebarModule { }

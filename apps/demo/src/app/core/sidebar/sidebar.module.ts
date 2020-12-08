import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule, DaffLoadingIconModule, DaffLinkSetModule } from '@daffodil/design';
import { DaffNavigationStateModule } from '@daffodil/navigation/state';

import { DemoSidebarStateModule } from './sidebar.state.module';
import { SidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { SidebarContainer } from './containers/sidebar/sidebar.component';
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DemoSidebarStateModule,
    DaffSidebarModule,
    FontAwesomeModule,
    DaffNavigationStateModule,
    DaffLinkSetModule,
    DaffLoadingIconModule
  ],
  declarations: [
    SidebarViewportContainer,
    SidebarContainer,
    SidebarListComponent
  ],
  exports: [
    SidebarViewportContainer
  ]
})

export class SidebarModule {}

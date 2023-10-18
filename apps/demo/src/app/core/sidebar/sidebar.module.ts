import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffSidebarModule,
  DaffLoadingIconModule,
  DaffLinkSetModule,
} from '@daffodil/design';
import { DaffNavigationStateModule } from '@daffodil/navigation/state';

import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';
import { SidebarContainer } from './containers/sidebar/sidebar.component';
import { SidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DemoSidebarStateModule } from './sidebar.state.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DemoSidebarStateModule,
    DaffSidebarModule,
    FontAwesomeModule,
    DaffNavigationStateModule,
    DaffLinkSetModule,
    DaffLoadingIconModule,
  ],
  declarations: [
    SidebarViewportContainer,
    SidebarContainer,
    SidebarListComponent,
  ],
  exports: [
    SidebarViewportContainer,
  ],
})

export class SidebarModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { DaffSidebarModule } from '../design/molecules/daff-sidebar/daff-sidebar.module';
import { FoundationSidebarStateModule } from './sidebar.state.module';
import { SidebarContainer } from './containers/sidebar.component';
import { SidebarViewComponent } from './components/sidebar-view/sidebar-view.component';

@NgModule({
  imports: [
    CommonModule,
    FoundationSidebarStateModule,
    DaffSidebarModule
  ],
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
    SidebarContainer,
    SidebarViewComponent
  ],
  exports: [
    SidebarComponent,
    SidebarItemComponent,
    SidebarContainer,
    SidebarViewComponent
  ]
})
export class SidebarModule { }

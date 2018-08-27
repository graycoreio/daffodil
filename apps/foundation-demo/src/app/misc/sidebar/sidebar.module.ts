import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { DaffSidebarModule } from '../../design/molecules/daff-sidebar/daff-sidebar.module';
import { FoundationSidebarStateModule } from './sidebar.state.module';

@NgModule({
  imports: [
    CommonModule,
    FoundationSidebarStateModule,
    DaffSidebarModule
  ],
  declarations: [
    SidebarComponent,
    SidebarItemComponent
  ],
  exports: [
    SidebarComponent,
    SidebarItemComponent
  ]
})
export class SidebarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarModule } from '../../design/molecules/sidebar/sidebar.module';
import { FoundationSidebarStateModule } from './sidebar.state.module';
import { SidebarContainer } from './containers/sidebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FoundationSidebarStateModule,
    DaffSidebarModule
  ],
  declarations: [
    SidebarContainer,
    SidebarComponent
  ],
  exports: [
    SidebarContainer,
    SidebarComponent
  ]
})
export class SidebarModule { }

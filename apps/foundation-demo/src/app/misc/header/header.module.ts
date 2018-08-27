import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffHeaderModule } from '../../design/molecules/daff-header/daff-header.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { FoundationHeaderStateModule } from './header.state.module';
import { DaffSidebarModule } from '../../design/molecules/daff-sidebar/daff-sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    DaffHeaderModule,
    FoundationHeaderStateModule,
    DaffSidebarModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent
  ]
})
export class HeaderModule { }

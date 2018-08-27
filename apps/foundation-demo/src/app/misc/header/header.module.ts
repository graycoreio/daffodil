import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffHeaderModule } from '../../design/molecules/daff-header/daff-header.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { FoundationHeaderStateModule } from './header.state.module';

@NgModule({
  imports: [
    CommonModule,
    DaffHeaderModule,
    FoundationHeaderStateModule
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

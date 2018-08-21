import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { HelpBoxComponent } from './help-box/help-box.component';
import { HeaderComponent } from './header/components/header/header.component';
import { FoundationMiscStateModule } from './misc-state.module';
import { SidebarItemComponent } from './header/components/sidebar-item/sidebar-item.component';
import { SidebarComponent } from './header/components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FoundationMiscStateModule
  ],
  declarations: [
    NotFoundComponent,
    HelpBoxComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  exports: [
    NotFoundComponent,
    HelpBoxComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent
  ]
})
export class MiscModule { }

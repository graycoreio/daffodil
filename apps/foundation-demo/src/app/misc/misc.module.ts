import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { HelpBoxComponent } from './help-box/help-box.component';
import { HeaderComponent } from './header/components/header/header.component';
import { FoundationMiscStateModule } from './misc-state.module';
import { SidebarItemComponent } from './header/components/sidebar-item/sidebar-item.component';

@NgModule({
  imports: [
    CommonModule,
    FoundationMiscStateModule
  ],
  declarations: [
    NotFoundComponent,
    HelpBoxComponent,
    HeaderComponent,
    SidebarItemComponent
  ],
  exports: [
    NotFoundComponent,
    HelpBoxComponent,
    HeaderComponent,
    SidebarItemComponent
  ]
})
export class MiscModule { }

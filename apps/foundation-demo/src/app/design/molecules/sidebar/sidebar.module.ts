import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffSidebarContentComponent } from './sidebar-content/sidebar-content.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffSidebarComponent,
    DaffSidebarItemComponent,
    DaffSidebarViewportComponent,
    DaffSidebarContentComponent
  ],
  exports: [
    DaffSidebarComponent,
    DaffSidebarItemComponent,
    DaffSidebarViewportComponent,
    DaffSidebarContentComponent
  ]
})
export class DaffSidebarModule { }

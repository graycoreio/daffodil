import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffSidebarComponent,
    DaffSidebarItemComponent,
    DaffSidebarViewportComponent
  ],
  exports: [
    DaffSidebarComponent,
    DaffSidebarItemComponent,
    DaffSidebarViewportComponent
  ]
})
export class DaffSidebarModule { }

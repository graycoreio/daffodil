import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { DaffSidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { DaffSidebarContentComponent } from './sidebar-content/sidebar-content.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffSidebarComponent,
    DaffSidebarItemComponent,
    DaffSidebarWrapperComponent,
    DaffSidebarContentComponent
  ],
  exports: [
    DaffSidebarComponent,
    DaffSidebarItemComponent,
    DaffSidebarWrapperComponent,
    DaffSidebarContentComponent
  ]
})
export class DaffSidebarModule { }

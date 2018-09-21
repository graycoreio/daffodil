import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffBackdropModule } from '../backdrop/backdrop.module';


@NgModule({
  imports: [
    CommonModule,
    DaffBackdropModule
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

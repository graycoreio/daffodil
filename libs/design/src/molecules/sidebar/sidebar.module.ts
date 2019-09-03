import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffBackdropModule } from '../backdrop/backdrop.module';


@NgModule({
  imports: [
    CommonModule,
    DaffBackdropModule
  ],
  declarations: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent
  ],
  exports: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent
  ]
})
export class DaffSidebarModule { }

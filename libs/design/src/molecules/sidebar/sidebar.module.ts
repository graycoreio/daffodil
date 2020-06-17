import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffBackdropModule } from '../backdrop/backdrop.module';
import { A11yModule } from '@angular/cdk/a11y';


@NgModule({
  imports: [
    CommonModule,
    DaffBackdropModule,
    A11yModule
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

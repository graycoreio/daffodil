import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffBackdropModule } from '../backdrop/backdrop.module';


@NgModule({
  imports: [
    CommonModule,
    DaffBackdropModule,
    A11yModule,
  ],
  declarations: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
  ],
  exports: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
  ],
})
export class DaffSidebarModule { }

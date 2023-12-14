import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { DaffSidebarHeaderActionDirective } from './sidebar-header/sidebar-header-action/sidebar-header-action.directive';
import { DaffSidebarHeaderTitleDirective } from './sidebar-header/sidebar-header-title/sidebar-header-title.directive';
import { DaffSidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffBackdropModule } from '../backdrop/backdrop.module';

@NgModule({
  imports: [
    CommonModule,
    A11yModule,
    DaffBackdropModule,
  ],
  declarations: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
    DaffSidebarHeaderComponent,
    DaffSidebarFooterComponent,
    DaffSidebarHeaderTitleDirective,
    DaffSidebarHeaderActionDirective,
  ],
  exports: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
    DaffSidebarHeaderComponent,
    DaffSidebarFooterComponent,
    DaffSidebarHeaderTitleDirective,
    DaffSidebarHeaderActionDirective,
  ],
})
export class DaffSidebarModule { }

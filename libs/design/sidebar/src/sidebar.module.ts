import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { DaffSidebarHeaderActionDirective } from './sidebar-header/sidebar-header-action/sidebar-header-action.directive';
import { DaffSidebarHeaderTitleDirective } from './sidebar-header/sidebar-header-title/sidebar-header-title.directive';
import { DaffSidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffSidebarViewportBackdropComponent } from './sidebar-viewport-backdrop/sidebar-viewport-backdrop.component';

/**
 * @deprecated in favor of {@link DAFF_SIDEBAR_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    A11yModule,
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
    DaffSidebarHeaderComponent,
    DaffSidebarFooterComponent,
    DaffSidebarHeaderTitleDirective,
    DaffSidebarHeaderActionDirective,
    DaffSidebarViewportBackdropComponent,
  ],
  exports: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
    DaffSidebarHeaderComponent,
    DaffSidebarFooterComponent,
    DaffSidebarHeaderTitleDirective,
    DaffSidebarHeaderActionDirective,
    DaffSidebarViewportBackdropComponent,
  ],
})
export class DaffSidebarModule { }

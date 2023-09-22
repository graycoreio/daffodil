import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '../../atoms/button/button.module';
import { DaffBackdropModule } from '../backdrop/backdrop.module';
import { DaffSidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { DaffSidebarHeaderTitleDirective } from './sidebar-header/sidebar-header-title/sidebar-header-title.directive';
import { DaffSidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffSidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    A11yModule,
    FontAwesomeModule,
    DaffButtonModule,
    DaffBackdropModule,
  ],
  declarations: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
    DaffSidebarHeaderComponent,
    DaffSidebarFooterComponent,
    DaffSidebarHeaderTitleDirective,
  ],
  exports: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
    DaffSidebarHeaderComponent,
    DaffSidebarFooterComponent,
    DaffSidebarHeaderTitleDirective,
  ],
})
export class DaffSidebarModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffArticleModule,
  DaffButtonModule,
  DaffNavbarModule,
  DaffSidebarModule,
} from '@daffodil/design';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DesignLandSidebarViewportComponent } from './sidebar-viewport.component';
import { DesignLandNavModule } from '../nav/nav.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,

    DaffSidebarModule,
    DaffNavbarModule,
    DaffButtonModule,
    DaffArticleModule,
    DesignLandNavModule,
    DaffThemeSwitchButtonModule,
  ],
  declarations: [
    DesignLandSidebarViewportComponent,
  ],
  exports: [
    DesignLandSidebarViewportComponent,
  ],
})
export class DesignLandSidebarViewportModule { }

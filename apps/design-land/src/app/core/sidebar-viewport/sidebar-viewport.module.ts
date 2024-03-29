import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffLogoModule } from '@daffodil/branding';
import { DaffArticleModule } from '@daffodil/design/article';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNavbarModule } from '@daffodil/design/navbar';
import { DaffSidebarModule } from '@daffodil/design/sidebar';
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
    DaffLogoModule,
  ],
  declarations: [
    DesignLandSidebarViewportComponent,
  ],
  exports: [
    DesignLandSidebarViewportComponent,
  ],
})
export class DesignLandSidebarViewportModule { }

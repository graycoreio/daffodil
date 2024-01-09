import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffSidebarModule } from '@daffodil/design/sidebar';
import { DaffRouterNamedViewOutletModule } from '@daffodil/router';

import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffioGuidesNavModule } from '../../guides/components/guides-nav/guides-nav.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,

    DaffSidebarModule,
    DaffButtonModule,

    DaffioSidebarStateModule,
    DaffioGuidesNavModule,
    DaffRouterNamedViewOutletModule,
  ],
  declarations: [
    DaffioSidebarViewportContainer,
  ],
  exports: [
    DaffioSidebarViewportContainer,
  ],
})
export class DaffioSidebarModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffioGuidesNavModule } from '../../guides/components/guides-nav/guides-nav.module';
import { DaffRouterNamedViewOutletModule } from '../router/named-view/outlet/outlet.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule,
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

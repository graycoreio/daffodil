import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffioGuidesNavModule } from '../../guides/components/guides-nav/guides-nav.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule,
    DaffioGuidesNavModule,
  ],
  declarations: [
    DaffioSidebarViewportContainer,
  ],
  exports: [
    DaffioSidebarViewportContainer,
  ],
})
export class DaffioSidebarModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffSidebarModule,
  DaffButtonModule,
} from '@daffodil/design';

import { DaffioGuidesNavTreeModule } from '../../guides/components/guides-nav-tree/guides-nav-tree.module';
import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarStateModule } from './sidebar.state.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule,
    DaffioGuidesNavTreeModule,
  ],
  declarations: [
    DaffioSidebarViewportContainer,
  ],
  exports: [
    DaffioSidebarViewportContainer,
  ],
})
export class DaffioSidebarModule {}

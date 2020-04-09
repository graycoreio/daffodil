import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule, DaffButtonModule, DaffLinkSetModule } from '@daffodil/design';

import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioGuidesViewerModule } from '../../docs/shared/components/guides-viewer/guides-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule,
    DaffioGuidesViewerModule
  ],
  declarations: [
    DaffioSidebarViewportContainer
  ],
  exports: [
    DaffioSidebarViewportContainer
  ]
})
export class DaffioSidebarModule {}

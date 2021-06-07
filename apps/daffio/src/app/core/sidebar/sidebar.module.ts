import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffSidebarModule,
  DaffButtonModule,
} from '@daffodil/design';

import { DaffioGuideNavModule } from '../../docs/guide-docs/components/guide-nav/guide-nav.module';
import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarStateModule } from './sidebar.state.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule,
    DaffioGuideNavModule,
  ],
  declarations: [
    DaffioSidebarViewportContainer,
  ],
  exports: [
    DaffioSidebarViewportContainer,
  ],
})
export class DaffioSidebarModule {}

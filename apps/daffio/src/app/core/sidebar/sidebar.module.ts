import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffSidebarModule,
  DaffButtonModule,
  DaffAccordionModule,
} from '@daffodil/design';

import { DaffioGuidesListModule } from '../../docs/guide-docs/components/guides-list/guides-list.module';
import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarStateModule } from './sidebar.state.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule,
    DaffioGuidesListModule,
    DaffAccordionModule,
  ],
  declarations: [
    DaffioSidebarViewportContainer,
  ],
  exports: [
    DaffioSidebarViewportContainer,
  ],
})
export class DaffioSidebarModule {}

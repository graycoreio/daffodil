import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { DaffioDocsPackagesListContainerModule } from 'apps/daffio/src/app/guides/containers/packages-list/packages-list.module';

import { DaffioDocsSidebarContainer } from './docs-sidebar.component';
import { DaffioDocsSidebarContentComponentModule } from '../../components/docs-sidebar-content/docs-sidebar-content.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LetModule,

    DaffioDocsPackagesListContainerModule,
    DaffioDocsSidebarContentComponentModule,
  ],
  declarations: [
    DaffioDocsSidebarContainer,
  ],
  exports: [
    DaffioDocsSidebarContainer,
  ],
})
export class DaffioDocsSidebarContainerModule {}

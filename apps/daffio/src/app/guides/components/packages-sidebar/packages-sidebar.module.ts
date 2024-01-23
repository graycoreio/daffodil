import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';

import { DaffButtonModule } from '@daffodil/design/button';

import { DaffioDocsPackagesSidebarComponent } from './packages-sidebar.component';
import { DaffioDocsSidebarContentComponentModule } from '../../../core/sidebar/components/docs-sidebar-content/docs-sidebar-content.module';
import { DaffioDocsPackagesListContainerModule } from '../../../guides/containers/packages-list/packages-list.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LetModule,
    DaffButtonModule,
    DaffioDocsPackagesListContainerModule,
    DaffioDocsSidebarContentComponentModule,
  ],
  declarations: [
    DaffioDocsPackagesSidebarComponent,
  ],
  exports: [
    DaffioDocsPackagesSidebarComponent,
  ],
})
export class DaffioDocsPackagesSidebarComponentModule {}

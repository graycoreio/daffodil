import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';

import { DaffButtonModule } from '@daffodil/design/button';

import { DaffioDocsPackagesSidebarComponent } from './packages-sidebar.component';
import { DaffioDocsSidebarComponentModule } from '../../../core/sidebar/components/docs-sidebar/docs-sidebar.module';
import { DaffioDocsPackagesListContainerModule } from '../../../guides/containers/packages-list/packages-list.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LetModule,
    DaffButtonModule,
    DaffioDocsPackagesListContainerModule,
    DaffioDocsSidebarComponentModule,
  ],
  declarations: [
    DaffioDocsPackagesSidebarComponent,
  ],
  exports: [
    DaffioDocsPackagesSidebarComponent,
  ],
})
export class DaffioDocsPackagesSidebarComponentModule {}

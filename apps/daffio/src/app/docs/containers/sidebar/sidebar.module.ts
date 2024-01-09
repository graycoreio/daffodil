import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffButtonModule } from '@daffodil/design/button';

import { DaffioDocsSidebarContainer } from './sidebar.component';
import { DaffioGuidesNavModule } from '../../../guides/components/guides-nav/guides-nav.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffButtonModule,
    DaffioGuidesNavModule,
  ],
  declarations: [
    DaffioDocsSidebarContainer,
  ],
  exports: [
    DaffioDocsSidebarContainer,
  ],
})
export class DaffioDocsSidebarModule {}

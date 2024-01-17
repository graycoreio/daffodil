import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffListModule } from '@daffodil/design/list';

import { DaffioDocsSidebarContentComponent } from './docs-sidebar-content/docs-sidebar-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    FontAwesomeModule,
    DaffListModule,
    DaffButtonModule,
  ],
  declarations: [
    DaffioDocsSidebarContentComponent,
  ],
  exports: [
    DaffioDocsSidebarContentComponent,
  ],
})
export class DaffioDocsSidebarComponentModule { }

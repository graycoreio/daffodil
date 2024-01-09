import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffListModule } from '@daffodil/design/list';

import { DaffioDocsSidebarComponent } from './docs-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffListModule,
  ],
  declarations: [
    DaffioDocsSidebarComponent,
  ],
  exports: [
    DaffioDocsSidebarComponent,
  ],
})
export class DaffioDocsSidebarComponentModule { }
